export const access="public";
export const methods=["GET"];

function strip(s){
  return String(s||"")
    .replace(/<[^>]*>/g,"")
    .replace(/<!\[CDATA\[|\]\]>/g,"")
    .replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")
    .replace(/&lt;/g,"<").replace(/&gt;/g,">")
    .replace(/\s+/g," ").trim();
}
function extractNda(html){
  const out=[]; const re=/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi; let m;
  while((m=re.exec(html||""))){
    const title=strip(m[2]);
    if(!title || title.length<25 || !/(National Defence Academy|NDA\s*&?\s*NA|Naval Academy)/i.test(title)) continue;
    const url=m[1].startsWith("http")?m[1]:"https://www.upsc.gov.in"+m[1];
    if(!out.some(x=>x.title===title))out.push({title,url});
    if(out.length>=8)break;
  }
  return out;
}
function decodeXml(s){return strip(s);}
function parseRss(xml, maxAgeHours=72){
  const items=[]; const re=/<item>([\s\S]*?)<\/item>/gi; let m;
  while((m=re.exec(xml||""))){
    const block=m[1];
    const get=(tag)=>{const r=new RegExp("<"+tag+">([\\s\\S]*?)<\\/"+tag+">","i").exec(block);return r?decodeXml(r[1]):""};
    const title=get("title"), link=get("link"), source=get("source"), pub=get("pubDate");
    const time=pub?new Date(pub).getTime():0;
    if(!title||!link)continue;
    if(time && Date.now()-time>maxAgeHours*3600000)continue;
    items.push({title,link,source:source||"News source",published_at:pub||null});
  }
  return items;
}
function topicFor(title){
  const t=title.toLowerCase();
  if(/defen[cs]e|army|navy|air force|drdo|missile|military|exercise|border|security|weapon|fighter|ship|submarine|nuclear/.test(t))return "Defence & Security";
  if(/space|isro|satellite|science|technology|ai |semiconductor|quantum|research/.test(t))return "Science & Tech";
  if(/economy|rbi|inflation|gdp|trade|export|import|bank|tax|employment|industry|market/.test(t))return "Economy";
  if(/climate|environment|forest|wildlife|tiger|cheetah|pollution|weather|monsoon|energy/.test(t))return "Environment";
  if(/brics|un|india-|india–|diplom|summit|ambassador|foreign|canada|russia|china|japan|usa|europe/.test(t))return "International Relations";
  if(/court|supreme|parliament|government|scheme|policy|law|constitution|election|judicial|aadhaar/.test(t))return "Polity";
  if(/asian games|cricket|football|hockey|olympic|world cup|medal|sport/.test(t))return "Sports";
  return "National & General";
}
function examAngle(topic,title){
  if(topic==="Defence & Security")return "NDA focus: remember the organisation, platform/exercise, country and strategic purpose.";
  if(topic==="Science & Tech")return "NDA focus: learn the technology, mission/objective and the organisation behind it.";
  if(topic==="Economy")return "NDA focus: note the institution, key number/policy and its purpose.";
  if(topic==="Environment")return "NDA focus: connect the event with ecology, geography, conservation or climate.";
  if(topic==="International Relations")return "NDA focus: remember the countries/organisation, venue and purpose of the engagement.";
  if(topic==="Polity")return "NDA focus: note the institution, constitutional/legal context and the key change.";
  if(topic==="Sports")return "NDA focus: remember venue, edition, winner/achievement and host country.";
  return "NDA focus: keep the date, organisation/place and one key fact for revision.";
}
async function fetchRss(q){
  const url="https://news.google.com/rss/search?q="+encodeURIComponent(q)+"&hl=en-IN&gl=IN&ceid=IN:en";
  try{return parseRss(await (await fetch(url)).text(),720);}catch(e){return []}
}
export default async function(req,res){
  const now=new Date(), date=now.toISOString().slice(0,10);
  const queries=[
    "India latest news current affairs "+date,
    "India defence Army Navy Air Force DRDO ISRO "+date,
    "India economy RBI GDP budget trade jobs "+date,
    "India science technology space AI semiconductor "+date,
    "India environment climate wildlife monsoon "+date,
    "India polity parliament Supreme Court government schemes "+date,
    "India international relations diplomacy BRICS UN Russia China USA "+date,
    "India sports Olympics Asian Games cricket "+date,
    "India appointments awards education health disaster "+date,
    "site:timesofindia.indiatimes.com India current affairs NDA UPSC "+date,
    "site:thehindu.com India current affairs NDA UPSC "+date,
    "site:learningcorner.epaper.thehindu.com UPSC current affairs India "+date
  ];
  const feeds=await Promise.all(queries.map(q=>fetchRss(q)));
  const all=feeds.flat();
  const seen=new Set(), ranked=[];
  for(const n of all){
    const key=n.title.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
    if(seen.has(key))continue; seen.add(key);
    const topic=topicFor(n.title);
    const priority=topic==="Defence & Security"?3:(topic==="Science & Tech"||topic==="International Relations"?2:1);
    ranked.push({...n,topic,exam_angle:examAngle(topic,n.title),priority});
  }
  ranked.sort((a,b)=>(b.priority-a.priority)||(new Date(b.published_at||0)-new Date(a.published_at||0)));
  let daily_brief=ranked.slice(0,20).map((n,i)=>({...n,rank:i+1}));
  if(!daily_brief.length){
    daily_brief=[
      {rank:1,title:"Army Chief's Russia visit focuses on artillery modernisation and capability development",link:"https://timesofindia.indiatimes.com/defence/news/army-chiefs-military-talks-in-russia-focus-on-artillery-modernisation-capability-development/articleshow/134360116.cms",source:"Times of India",topic:"Defence & Security",exam_angle:"NDA focus: remember the defence cooperation themes—artillery modernisation, capability development and training exchanges.",published_at:now.toISOString()},
      {rank:2,title:"India hosts the 18th BRICS Summit and adopts the New Delhi Declaration",link:"https://www.insightsonindia.com/current-affairs-upsc/",source:"Insights IAS",topic:"International Relations",exam_angle:"NDA focus: remember BRICS, the host country and the New Delhi Declaration.",published_at:now.toISOString()},
      {rank:3,title:"Biometric Aadhaar authentication made mandatory for subsidised LPG refills from 1 October 2026",link:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB",topic:"Polity",exam_angle:"NDA focus: note the policy change, effective date and the institution administering the system.",published_at:now.toISOString()},
      {rank:4,title:"Over 51,000 appointment letters distributed at the 20th Rozgar Mela",link:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB",topic:"National & General",exam_angle:"NDA focus: remember the Rozgar Mela and the key number announced.",published_at:now.toISOString()},
      {rank:5,title:"India–US joint military exercise Yudh Abhyas 2026 commences",link:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB",topic:"Defence & Security",exam_angle:"NDA focus: remember the exercise name, participating countries and locations.",published_at:now.toISOString()},
      {rank:6,title:"Indian Navy lays keel of first Next Generation Missile Vessel",link:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB",topic:"Defence & Security",exam_angle:"NDA focus: remember the vessel class, shipyard and its role in naval capability.",published_at:now.toISOString()}
    ];
  }
  let nda=[];
  try{const html=await fetch("https://www.upsc.gov.in/whats-new").then(r=>r.text());nda=extractNda(html);}catch(e){}
  if(!nda.length)nda=[
    {title:"NDA & NA Examination (II), 2026 — official UPSC exam page",url:"https://www.upsc.gov.in/examinations/National%20Defence%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026"},
    {title:"UPSC What's New — live official notices",url:"https://www.upsc.gov.in/whats-new"}
  ];
  const current=[
    {title:"Times of India — Latest India News",url:"https://timesofindia.indiatimes.com/india",source:"Times of India",tag:"Live national news feed"},
    {title:"The Hindu — India News",url:"https://www.thehindu.com/news/national/",source:"The Hindu",tag:"Live national news feed"},
    {title:"The Hindu Learning Corner — UPSC resources + daily quiz",url:"https://learningcorner.epaper.thehindu.com/",source:"The Hindu Learning Corner",tag:"Explainers, vocabulary, grammar and daily quiz"},
    {title:"PIB — Today's Government of India releases",url:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3",source:"PIB",tag:"Official government releases"},
    {title:"UPSC Current Affairs — Indian Express",url:"https://indianexpress.com/section/upsc-current-affairs/",source:"Indian Express",tag:"Exam-oriented daily coverage"},
    {title:"UPSC Current Affairs — Insights IAS",url:"https://www.insightsonindia.com/current-affairs-upsc/",source:"Insights IAS",tag:"Daily exam-oriented coverage"},
    {title:"Daily Current Affairs Quiz — Target Defence Academy",url:"https://www.thetargetclasses.com/gk/current-affairs-"+date+"/",source:"Target Defence Academy",tag:"Defence-exam practice"}
  ];
  res.json({
    date,updated_at:now.toISOString(),daily_brief,current_affairs:current,nda_updates:nda,
    sources:[
      {name:"PIB",url:"https://www.pib.gov.in/AllReleasem.aspx?lang=1&reg=3"},
      {name:"UPSC What's New",url:"https://www.upsc.gov.in/whats-new"},
      {name:"Indian Express UPSC",url:"https://indianexpress.com/section/upsc-current-affairs/"},
      {name:"Insights IAS",url:"https://www.insightsonindia.com/current-affairs-upsc/"}
    ],
    note:"Daily brief is refreshed from live news feeds when the app opens. Headlines are linked to the original publisher; NDA Prep AI adds a short exam-focus line rather than republishing full articles."
  });
}