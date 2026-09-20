export const access="public";
export const methods=["GET"];

function strip(s){return String(s||"").replace(/<[^>]*>/g,"").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g," ").trim();}
function extractNda(html){
 const out=[]; const re=/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi; let m;
 while((m=re.exec(html||""))){
  const title=strip(m[2]); if(!title||!/National Defence Academy|NDA|Naval Academy|answer key|admit card|examination time table/i.test(title))continue;
  const url=m[1].startsWith("http")?m[1]:"https://www.upsc.gov.in"+m[1];
  if(!out.some(x=>x.title===title))out.push({title,url});
  if(out.length>=10)break;
 }
 return out;
}
export default async function(req,res){
 const now=new Date();
 const date=now.toISOString().slice(0,10);
 let nda=[];
 try{const html=await fetch("https://www.upsc.gov.in/whats-new").then(r=>r.text());nda=extractNda(html);}catch(e){}
 if(!nda.length)nda=[
  {title:"Provisional Answer Key — NDA & NA Examination (II), 2026",url:"https://www.upsc.gov.in/whats-new/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026/Provisional%20Answer%20Key"},
  {title:"NDA & NA Examination (II), 2026 — official exam page",url:"https://www.upsc.gov.in/examinations/National%20Defence%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026"},
  {title:"UPSC What's New — live official notices",url:"https://www.upsc.gov.in/whats-new"}
 ];
 const current=[
  {title:"Today's PIB releases — Government of India",url:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB",tag:"Official government releases"},
  {title:"Today's UPSC Current Affairs — Indian Express",url:"https://indianexpress.com/section/upsc-current-affairs/",source:"Indian Express",tag:"Exam-oriented daily coverage"},
  {title:"Today's UPSC Current Affairs — Unacademy",url:"https://unacademy.com/upsc-current-affairs/home",source:"Unacademy",tag:"Daily analysis + quiz"},
  {title:"Today's Current Affairs Quiz — WRAP Exams",url:"https://wrapexams.com/upsc/archives/daily-current-affairs-quiz/"+date+"/",source:"WRAP Exams",tag:"Daily MCQ practice"}
 ];
 res.json({date,updated_at:now.toISOString(),current_affairs:current,nda_updates:nda,sources:[
  {name:"PIB",url:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3"},
  {name:"UPSC What's New",url:"https://www.upsc.gov.in/whats-new"},
  {name:"UPSC Active Examinations",url:"https://www.upsc.gov.in/examinations/active-exams"}
 ],note:"The app refreshes this page from live source links when opened. UPSC is authoritative for official exam notices."});
}