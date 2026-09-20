import { storage, db } from "hatchable";
import crypto from "node:crypto";

export const access = "member";
export const methods = ["GET","POST","DELETE"];

export default async function(req,res){
  const userId = req.member.id;

  if(req.method === "GET"){
    const { rows } = await db.query(
      "SELECT id, filename, content_type, size_bytes, created_at FROM study_uploads WHERE user_id = $1 ORDER BY created_at DESC LIMIT 30",
      [userId]
    );
    const items = await Promise.all(rows.map(async r => ({
      ...r,
      url: await storage.url((await db.query("SELECT storage_key FROM study_uploads WHERE id = $1 AND user_id = $2", [r.id,userId])).rows[0].storage_key)
    })));
    return res.json({files:items});
  }

  if(req.method === "DELETE"){
    const id = String(req.query?.id || "");
    if(!id) return res.status(400).json({error:"id required"});
    const { rows } = await db.query("SELECT storage_key FROM study_uploads WHERE id = $1 AND user_id = $2", [id,userId]);
    if(!rows.length) return res.status(404).json({error:"file not found"});
    await storage.del(rows[0].storage_key);
    await db.query("DELETE FROM study_uploads WHERE id = $1 AND user_id = $2", [id,userId]);
    return res.json({ok:true});
  }

  const file = (req.files || []).find(f => f.field === "file");
  if(!file) return res.status(400).json({error:"Choose a study file."});
  if(file.buffer.length > 10 * 1024 * 1024) return res.status(413).json({error:"Maximum file size is 10 MB."});

  const allowed = new Set([
    "application/pdf","text/plain","text/markdown","text/csv",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword","image/png","image/jpeg","image/webp"
  ]);
  const type = file.contentType || "application/octet-stream";
  if(!allowed.has(type)) return res.status(415).json({error:"Supported: PDF, TXT, MD, CSV, DOC/DOCX, PNG, JPG, WEBP."});

  const ext = (file.filename.split(".").pop() || "bin").toLowerCase();
  const key = "study-files/" + userId + "/" + crypto.randomUUID() + "." + ext;
  await storage.put(key, file.buffer, type);

  const rawText = String(req.body?.extracted_text || "");
  const extracted = rawText.slice(0, 60000);
  const { rows } = await db.query(
    "INSERT INTO study_uploads (user_id, filename, storage_key, content_type, size_bytes, extracted_text) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, filename, content_type, size_bytes, created_at",
    [userId,file.filename,key,type,file.buffer.length,extracted || null]
  );

  return res.json({ok:true,file:{...rows[0],url:await storage.url(key)},analyzable:!!extracted});
}