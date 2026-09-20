import { db } from "hatchable";
export const access="admin";
export const methods=["GET"];
export default async function(req,res){
 const q=async(sql)=>{const r=await db.query(sql);return Number(r.rows[0]?.n||0)};
 res.json({users:await q("SELECT count(*) n FROM users"),attempts:await q("SELECT count(*) n FROM mock_attempts"),questions:await q("SELECT count(*) n FROM mock_questions"),tests:await q("SELECT count(*) n FROM mock_tests")});
}