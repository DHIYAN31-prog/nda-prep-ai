import { ai } from "hatchable";
export const access="member";
export const methods=["POST"];
export default async function(req,res){
  const q=String(req.body?.question||"").trim();
  const level=String(req.body?.level||"beginner");
  if(!q)return res.status(400).json({error:"question required"});
  const result=await ai.generateText({
    model:"sonnet",
    purpose:"nda-tutor",
    system:"You are an NDA written-exam tutor. Explain in simple student-friendly language. Separate generated explanation from official UPSC facts. For maths, show correct steps and verify arithmetic. End with a quick revision point. Never claim generated questions are PYQs.",
    prompt:"Student level: "+level+"\nQuestion: "+q+"\nReturn: Simple explanation, formula/concept, step-by-step example, common mistake, quick revision point.",
    maxSteps:1
  });
  res.json({answer:result.text||String(result)});
}