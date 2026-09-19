import { db } from "hatchable";
export const access="public";
export const methods=["GET"];
export default async function(req,res){const {rows}=await db.query("SELECT id,title,subject,duration_minutes,total_questions,total_marks,difficulty,instructions FROM mock_tests ORDER BY created_at ASC");res.json({tests:rows});}