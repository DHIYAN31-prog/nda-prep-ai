import { db } from "hatchable";
export const access="member";
export const methods=["GET"];

export default async function(req,res){
  const uid=req.member.id;
  const a=await db.query("SELECT score,correct,attempted,total,time_seconds,completed_at FROM mock_attempts WHERE user_id=$1 ORDER BY completed_at DESC LIMIT 20",[uid]);
  const p=await db.query("SELECT study_date,minutes,questions_attempted,correct_answers,weak_area FROM progress WHERE user_id=$1 ORDER BY study_date DESC LIMIT 14",[uid]);
  const attempts=a.rows||[], progress=p.rows||[];
  const attempted=attempts.reduce((s,x)=>s+Number(x.attempted||0),0);
  const correct=attempts.reduce((s,x)=>s+Number(x.correct||0),0);
  const accuracy=attempted?Math.round(correct/attempted*100):0;
  let analysis="FREE PERFORMANCE COACH\n\n";
  if(!attempts.length){
    analysis+="There is not enough personal performance data yet. Complete your first mock and return here.\n\nNext session: do 20 focused questions, review every wrong answer, then retry the weak topic.";
  }else{
    analysis+="Recent mocks: "+attempts.length+"\nOverall recent accuracy: "+accuracy+"%\n\n";
    analysis+=accuracy>=80
      ?"Keep your strong accuracy and increase timed practice. Spend the next session on mixed questions and error review."
      :accuracy>=60
      ?"Your base is developing. Split the next session between targeted revision and timed questions. Review every wrong answer before starting a new topic."
      :"Focus on fundamentals first. Use short topic sets, write down why each mistake happened, and repeat the same topic after revision.";
    if(progress.length)analysis+="\n\nRecent study records: "+progress.length+". Keep a consistent daily study block and track the topic behind each mistake.";
  }
  res.json({analysis,attempts,progress,mode:"free_data_based",provider_required:false});
}