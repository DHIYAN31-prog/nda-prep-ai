import { db, storage } from "hatchable";

export const access="public";
export const methods=["GET"];

export default async function(req,res){
  const id=String(req.query?.id||"").trim();
  if(!id)return res.status(400).json({error:"id required"});
  const q=await db.query("SELECT storage_key, filename, content_type FROM ncert_uploads WHERE id = $1 LIMIT 1",[id]);
  if(!q.rows.length)return res.status(404).json({error:"PDF not found"});
  const row=q.rows[0];
  const obj=await storage.get(row.storage_key);
  res.setHeader("Content-Type",row.content_type||"application/pdf");
  res.setHeader("Content-Disposition",'inline; filename="'+String(row.filename||"study.pdf").replace(/["\\]/g,"")+'"');
  res.setHeader("Cache-Control","public, max-age=300");
  return res.send(obj.buffer);
}