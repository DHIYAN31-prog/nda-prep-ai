import { db } from "hatchable";
export const access="member";
export const methods=["GET","POST","DELETE"];
export default async function(req,res){
 const uid=req.member.id;
 if(req.method==="GET"){const r=await db.query("SELECT id,item_type,item_key,title,payload,created_at FROM bookmarks WHERE user_id=$1 ORDER BY created_at DESC",[uid]);return res.json({bookmarks:r.rows});}
 const b=req.body||{};
 if(req.method==="POST"){const r=await db.query("INSERT INTO bookmarks(user_id,item_type,item_key,title,payload) VALUES($1,$2,$3,$4,$5) ON CONFLICT(user_id,item_type,item_key) DO UPDATE SET title=EXCLUDED.title,payload=EXCLUDED.payload RETURNING id",[uid,b.item_type||"question",b.item_key||"",b.title||"Saved item",b.payload||""]);return res.json({ok:true,id:r.rows[0].id});}
 await db.query("DELETE FROM bookmarks WHERE user_id=$1 AND id=$2",[uid,b.id]);res.json({ok:true});
}