import { db } from "hatchable";
export const access="member";
export const methods=["GET"];
export default async function(req,res){
  const uid=req.member.id;
  const [a,p]=await Promise.all([
    db.query("SELECT a.score,a.correct,a.attempted,a.total,a.time_seconds,a.completed_at,t.subject,t.title FROM mock_attempts a JOIN mock_tests t ON t.id=a.test_id WHERE a.user_id=$1 ORDER BY a.completed_at DESC LIMIT 50",[uid]),
    db.query("SELECT study_date,minutes,questions_attempted,correct_answers,weak_area FROM progress WHERE user_id=$1 ORDER BY study_date DESC LIMIT 30",[uid])
  ]);
  const attempts=a.rows||[], progress=p.rows||[];
  const attempted=attempts.reduce((s,x)=>s+Number(x.attempted||0),0);
  const correct=attempts.reduce((s,x)=>s+Number(x.correct||0),0);
  const totalTime=attempts.reduce((s,x)=>s+Number(x.time_seconds||0),0);
  const bySubject={};
  for(const x of attempts){
    const k=x.subject||"Mixed";
    bySubject[k]??={attempts:0,attempted:0,correct:0,time_seconds:0};
    bySubject[k].attempts++; bySubject[k].attempted+=Number(x.attempted||0); bySubject[k].correct+=Number(x.correct||0); bySubject[k].time_seconds+=Number(x.time_seconds||0);
  }
  const subjects=Object.entries(bySubject).map(([subject,v])=>({subject,...v,accuracy:v.attempted?Math.round(v.correct/v.attempted*100):0,avg_seconds:v.attempted?Math.round(v.time_seconds/v.attempted):0})).sort((x,y)=>x.accuracy-y.accuracy);
  const weakAreas=[...new Set(progress.map(x=>x.weak_area).filter(Boolean))].slice(0,8);
  return res.json({
    summary:{attempts:attempts.length,questions:attempted,correct,accuracy:attempted?Math.round(correct/attempted*100):0,total_time_seconds:totalTime,avg_seconds_per_question:attempted?Math.round(totalTime/attempted):0},
    subjects,weakAreas,progress:progress.slice(0,14)
  });
}