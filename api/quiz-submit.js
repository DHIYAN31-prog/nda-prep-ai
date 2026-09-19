import { db } from "hatchable";
import { auth } from "hatchable";
export const access = "public";
export const methods = ["POST"];
export default async function(req,res){const user=await auth.getUser(req);if(!user)return res.status(401).json({error:"Sign in required"});const b=req.body||{};await db.query("INSERT INTO quiz_attempts (user_id,subject,score,total,weak_area) VALUES ($1,$2,$3,$4,$5)",[user.id,b.subject||"General",b.score||0,b.total||0,b.weak_area||null]);res.json({ok:true});}