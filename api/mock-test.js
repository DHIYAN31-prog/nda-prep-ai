import { db } from "hatchable";
export const access="public";
export const methods=["GET"];
export default async function(req,res){const id=req.query?.id;if(!id)return res.status(400).json({error:"id required"});const t=await db.query("SELECT id,title,subject,duration_minutes,total_questions,total_marks,difficulty,instructions FROM mock_tests WHERE id=$1",[id]);const q=await db.query("SELECT id,question_no,question_text,option_a,option_b,option_c,option_d,topic FROM mock_questions WHERE test_id=$1 ORDER BY question_no",[id]);res.json({test:t.rows[0]||null,questions:q.rows});}