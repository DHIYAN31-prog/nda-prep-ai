export const access="member";
export const methods=["POST"];
function sentences(text){return (text.replace(/\s+/g," ").match(/[^.!?]+[.!?]+/g)||[]).map(s=>s.trim()).filter(s=>s.length>=45&&s.length<=320).filter(s=>!/^(contents|chapter|exercise|answer key|figure|table)\b/i.test(s));}
function key(i,j){return (i*11+j*7)%4;}
export default async function(req,res){
 const text=String(req.body?.source_text||"").trim().slice(0,90000);
 const count=Math.min(30,Math.max(5,Number(req.body?.count||10)));
 if(!text)return res.status(400).json({error:"source_text required"});
 const pool=sentences(text);
 if(pool.length<4)return res.status(422).json({error:"Not enough readable text in this PDF. Try another uploaded PDF."});
 const qs=[]; for(let i=0;i<pool.length&&qs.length<count;i++){
  const s=pool[i];
  const others=pool.filter((x,n)=>x!==s&&n!==i);
  const candidates=[s,...others.slice(i%Math.max(1,others.length),i%Math.max(1,others.length)+3),...others];
  const opts=[]; for(const c of candidates){const v=c.slice(0,260);if(!opts.includes(v))opts.push(v);if(opts.length===4)break}
  while(opts.length<4)opts.push("This statement is not supported by the selected uploaded PDF.");
  const order=[0,1,2,3].sort((a,b)=>key(i,a)-key(i,b));
  const out=order.map(n=>opts[n]);
  qs.push({question:["According to the uploaded PDF, which statement is supported by the source?","Which statement matches the uploaded study material?","Select the statement directly supported by the uploaded PDF."][i%3],options:out,answer:["A","B","C","D"][out.indexOf(s.slice(0,260))],explanation:"The correct option is reproduced from the selected uploaded PDF text. Review the source sentence for context.",topic:"Uploaded PDF • 1 Mark",difficulty:"Source-based",marks:1,source:"User-uploaded PDF"});
 }
 res.json({questions:qs,source_based:true,provider_required:false,bank_size:pool.length});
}