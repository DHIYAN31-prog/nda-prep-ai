import { db, ai } from "hatchable";
export const access="member";
export const methods=["GET"];
export default async function(req,res){
  const uid=req.member.id;
  const a=await db.query("SELECT score,correct,attempted,total,time_seconds,completed_at FROM mock_attempts WHERE user_id=$1 ORDER BY completed_at DESC LIMIT 20",[uid]);
  const p=await db.query("SELECT study_date,minutes,questions_attempted,correct_answers,weak_area FROM progress WHERE user_id=$1 ORDER BY study_date DESC LIMIT 14",[uid]);
  const prompt="Analyze this NDA student's real recent data. Give 3 strong areas, 3 weak areas, 3 revision actions and one next-session plan. Do not invent scores. Data="+JSON.stringify({attempts:a.rows,progress:p.rows});
  const r=await ai.generateText({model:"sonnet",purpose:"nda-coach",system:"You are a factual study coach. Base recommendations only on supplied data and say when data is insufficient.",prompt,maxSteps:1});
  res.json({analysis:r.text||String(r),attempts:a.rows,progress:p.rows});
}