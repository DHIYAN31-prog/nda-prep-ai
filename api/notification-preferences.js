import { db } from "hatchable";
export const access="member";
export const methods=["GET","POST"];
export default async function(req,res){
  const uid=req.member.id;
  if(req.method==="POST"){
    const b=req.body||{};
    await db.query(`INSERT INTO notification_preferences
      (user_id,new_videos,mock_tests,study_reminders,recommendations,current_affairs,quiet_start,quiet_end)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      ON CONFLICT (user_id) DO UPDATE SET
      new_videos=$2,mock_tests=$3,study_reminders=$4,recommendations=$5,current_affairs=$6,quiet_start=$7,quiet_end=$8,updated_at=now()`,
      [uid,b.new_videos!==false,b.mock_tests!==false,b.study_reminders!==false,b.recommendations!==false,b.current_affairs!==false,String(b.quiet_start||"22:00"),String(b.quiet_end||"06:00")]);
  }
  const r=await db.query("SELECT new_videos,mock_tests,study_reminders,recommendations,current_affairs,quiet_start,quiet_end FROM notification_preferences WHERE user_id=$1",[uid]);
  const prefs=r.rows[0]||{new_videos:true,mock_tests:true,study_reminders:true,recommendations:true,current_affairs:true,quiet_start:"22:00",quiet_end:"06:00"};
  return res.json({preferences:prefs});
}