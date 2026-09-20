import { storage, db } from "hatchable";

export const access = "public";
export const methods = ["GET"];

export default async function(req,res){
  const {rows} = await db.query(
    "SELECT id, class_name, subject, filename, content_type, size_bytes, created_at, storage_key FROM ncert_uploads ORDER BY class_name, subject, filename"
  );
  const files = await Promise.all(rows.map(async r => ({
    id:r.id,
    className:r.class_name,
    subject:r.subject,
    title:r.filename,
    sizeBytes:r.size_bytes,
    createdAt:r.created_at,
    url:await storage.url(r.storage_key,{ttl:604800})
  })));
  return res.json({files});
}