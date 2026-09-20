import { ai } from "hatchable";
export const access="member";
export const methods=["POST"];
export default async function(req,res){
  const subject=String(req.body?.subject||"Mathematics");
  const topic=String(req.body?.topic||"Algebra");
  const difficulty=String(req.body?.difficulty||"Hard");
  const count=Math.min(10,Math.max(1,Number(req.body?.count||5)));
  const result=await ai.generateText({
    model:"sonnet",
    purpose:"nda-question-generator",
    system:"Generate original NDA-style objective questions. Never copy or claim actual UPSC PYQs. Return strict JSON array only. Each object: question, options[A,B,C,D], answer[A-D], explanation, difficulty, topic, marks, negative_marks.",
    prompt:"Create "+count+" original "+difficulty+" questions for "+subject+" / "+topic+". Make distractors plausible and verify each answer.",
    maxSteps:1
  });
  let questions=[];
  try{questions=JSON.parse(result.text||"[]")}catch(e){return res.status(502).json({error:"AI returned invalid question JSON"})}
  res.json({questions});
}