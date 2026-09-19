import { db } from "hatchable";
export const access="user";
export const methods=["GET"];
export default async function(req,res){const {rows}=await db.query("SELECT a.id,a.score,a.correct,a.attempted,a.total,a.time_seconds,a.completed_at,t.title,t.subject FROM mock_attempts a JOIN mock_tests t ON t.id=a.test_id WHERE a.user_id=$1 ORDER BY a.completed_at DESC LIMIT 20",[req.user.id]);res.json({attempts:rows});}