import { db, storage } from "hatchable";

export const access="public";
export const methods=["GET"];

function infer(filename,storedClass,storedSubject){
 const f=String(filename||"").toLowerCase();
 const m=f.match(/(?:class[- ]?|11th|12th|10th|9th|8th|7th|6th)(\d{1,2})/i);
 const n=m?Number(m[1]):(f.match(/(11th|12th|10th|9th|8th|7th|6th)/)?.[1]||"");
 const cls=n?("Class "+n):storedClass;
 let subject=storedSubject||"General";
 if(/physics/.test(f))subject="Physics";
 else if(/chemistry/.test(f))subject="Chemistry";
 else if(/biology/.test(f))subject="Biology";
 else if(/history/.test(f))subject="History";
 else if(/geography/.test(f))subject="Geography";
 else if(/polity|political-science/.test(f))subject="Polity";
 else if(/economics/.test(f))subject="Economics";
 else if(/sociology/.test(f))subject="Sociology";
 else if(/math/.test(f))subject="Mathematics";
 else if(/science/.test(f))subject="Science";
 return {className:cls,subject};
}
export default async function(req,res){
 const q=await db.query("SELECT id, class_name, subject, filename, size_bytes, created_at, storage_key FROM ncert_uploads ORDER BY created_at DESC");
 const seen=new Set();
 const files=[];
 for(const r of q.rows){
  if(seen.has(r.filename))continue;
  seen.add(r.filename);
  const meta=infer(r.filename,r.class_name,r.subject);
  files.push({id:r.id,className:meta.className,subject:meta.subject,title:r.filename,sizeBytes:r.size_bytes,createdAt:r.created_at,url:await storage.url(r.storage_key)});
 }
 res.json({files});
}