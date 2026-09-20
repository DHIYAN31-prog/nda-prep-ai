import { db } from "hatchable";
export const access="member";
export const methods=["GET","POST"];
export default async function(req,res){
 const uid=req.member.id;
 if(req.method==="GET"){const p=await db.query("SELECT * FROM study_plans WHERE user_id=$1",[uid]);const t=await db.query("SELECT id,task_date,title,subject,minutes,completed FROM study_tasks WHERE user_id=$1 ORDER BY task_date,title",[uid]);return res.json({plan:p.rows[0]||null,tasks:t.rows});}
 const b=req.body||{};const plan=b.plan||{};await db.query("INSERT INTO study_plans(user_id,exam_date,study_hours,target_score,weak_subjects,strong_subjects,plan_json,updated_at) VALUES($1,$2,$3,$4,$5,$6,$7,now()) ON CONFLICT(user_id) DO UPDATE SET exam_date=EXCLUDED.exam_date,study_hours=EXCLUDED.study_hours,target_score=EXCLUDED.target_score,weak_subjects=EXCLUDED.weak_subjects,strong_subjects=EXCLUDED.strong_subjects,plan_json=EXCLUDED.plan_json,updated_at=now()",[uid,plan.exam_date||null,Number(plan.study_hours||1),Number(plan.target_score||0),plan.weak_subjects||"",plan.strong_subjects||"",JSON.stringify(plan.plan||[])]);res.json({ok:true});
}