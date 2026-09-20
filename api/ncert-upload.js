import { storage, db } from "hatchable";
import crypto from "node:crypto";

export const access = "admin";
export const methods = ["GET","POST","DELETE"];

export default async function(req,res){
  if(req.method === "GET"){
    const { rows } = await db.query(
      "SELECT id, class_name, subject, filename, content_type, size_bytes, created_at, storage_key FROM ncert_uploads ORDER BY class_name, subject, filename"
    );
    const files = await Promise.all(rows.map(async r => ({
      ...r,
      url: await storage.url(r.storage_key, {ttl: 604800})
    })));
    return res.json({files});
  }

  if(req.method === "DELETE"){
    const id = String(req.query?.id || "");
    if(!id) return res.status(400).json({error:"id required"});
    const {rows} = await db.query("SELECT storage_key FROM ncert_uploads WHERE id = $1",[id]);
    if(!rows.length) return res.status(404).json({error:"file not found"});
    await storage.del(rows[0].storage_key);
    await db.query("DELETE FROM ncert_uploads WHERE id = $1",[id]);
    return res.json({ok:true});
  }

  const file = (req.files || []).find(f => f.field === "file");
  if(!file) return res.status(400).json({error:"Choose a PDF."});
  if(file.buffer.length > 40 * 1024 * 1024) return res.status(413).json({error:"Maximum NCERT PDF size is 40 MB."});
  const type = file.contentType || "application/pdf";
  if(type !== "application/pdf") return res.status(415).json({error:"Only PDF files are supported."});

  const className = String(req.body?.class_name || "").trim();
  const subject = String(req.body?.subject || "").trim();
  if(!className || !subject) return res.status(400).json({error:"Class and subject are required."});

  const ext = (file.filename.split(".").pop() || "pdf").toLowerCase();
  const key = "ncert-pdfs/" + crypto.randomUUID() + "." + ext;
  await storage.put(key, file.buffer, type);
  const {rows} = await db.query(
    "INSERT INTO ncert_uploads (class_name, subject, filename, storage_key, content_type, size_bytes) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, class_name, subject, filename, content_type, size_bytes, created_at, storage_key",
    [className,subject,file.filename,key,type,file.buffer.length]
  );
  return res.json({ok:true,file:{...rows[0],url:await storage.url(key,{ttl:604800})}});
}