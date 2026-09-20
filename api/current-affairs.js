export const access="public";
export const methods=["GET"];

function decode(s){
  return s.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<[^>]*>/g,"").trim();
}
function stripHtml(s){return decode(String(s||"")).replace(/\s+/g," ").trim();}
function extractRss(xml,limit=10){
  const out=[]; const items=String(xml||"").match(/<item>[\s\S]*?<\/item>/gi)||[];
  for(const item of items.slice(0,limit)){
    const title=(item.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1];
    const link=(item.match(/<link[^>]*>([\s\S]*?)<\/link>/i)||[])[1];
    const pub=(item.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i)||[])[1];
    if(title) out.push({title:stripHtml(title),url:stripHtml(link||""),published:stripHtml(pub||"")});
  }
  return out;
}
function extractLinks(html,pattern,limit=12){
  const out=[]; const re=/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi; let m;
  while((m=re.exec(html||"")) && out.length<limit){
    const title=stripHtml(m[2]); const url=m[1];
    if(title && pattern.test(title)) out.push({title,url:url.startsWith("http")?url:"https://www.upsc.gov.in"+url});
  }
  return out;
}
export default async function(req,res){
  const today=new Date().toISOString().slice(0,10);
  const result={date:today,updated_at:new Date().toISOString(),current_affairs:[],nda_updates:[],sources:[
    {name:"PIB — Government of India",url:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3"},
    {name:"Indian Express — UPSC Current Affairs",url:"https://indianexpress.com/section/upsc-current-affairs/"},
    {name:"UPSC — What's New",url:"https://www.upsc.gov.in/whats-new"},
    {name:"UPSC — Active Examinations",url:"https://www.upsc.gov.in/examinations/active-exams"}
  ]};
  try{
    const [pib,ie,upsc]=await Promise.all([
      fetch("https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3").then(r=>r.text()).catch(()=> ""),
      fetch("https://indianexpress.com/section/upsc-current-affairs/").then(r=>r.text()).catch(()=> ""),
      fetch("https://www.upsc.gov.in/whats-new").then(r=>r.text()).catch(()=> "")
    ]);
    const pibLinks=extractLinks(pib,/.{3,}/,8).map(x=>({...x,source:"PIB"}));
    const ieLinks=extractLinks(ie,/.{3,}/,8).map(x=>({...x,source:"Indian Express"}));
    result.current_affairs=[...ieLinks,...pibLinks].filter((x,i,a)=>a.findIndex(y=>y.title===x.title)===i).slice(0,12);
    result.nda_updates=extractLinks(upsc,/National Defence Academy|NDA|Naval Academy|Defence Academy|answer key|admit card|examination time table/i,12);
  }catch(e){}
  if(!result.current_affairs.length){
    result.current_affairs=[
      {title:"Open today's Indian Express UPSC Current Affairs",url:"https://indianexpress.com/section/upsc-current-affairs/",source:"Indian Express"},
      {title:"Open today's PIB releases",url:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB"}
    ];
  }
  if(!result.nda_updates.length){
    result.nda_updates=[
      {title:"UPSC What's New — check latest NDA notices, admit cards, results and answer keys",url:"https://www.upsc.gov.in/whats-new"},
      {title:"NDA & NA examination pages",url:"https://www.upsc.gov.in/examinations","source":"UPSC"}
    ];
  }
  res.json(result);
}