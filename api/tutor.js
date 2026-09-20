import { ai } from "hatchable";

export const access="member";
export const methods=["POST"];

const kb={
 algebra:{name:"Algebra",definition:"Algebra uses symbols to represent unknown quantities and relationships between them.",intuition:"Think of x as a box containing a number. Every operation you do to one side must also be done to the other side to keep the equation balanced.",formula:"For ax+b=c, x=(c-b)/a when a≠0.",example:"2x−5=9 → add 5: 2x=14 → divide by 2: x=7.",trap:"Sign changes, skipping balance steps, and not checking the answer.",practice:"Solve 3x+7=22.",flash:["Linear equations","Quadratics","Sequences","Binomial theorem"]},
 trigonometry:{name:"Trigonometry",definition:"Trigonometry connects angles with ratios in triangles and identities that remain true for every valid angle.",intuition:"For a right triangle, sin, cos and tan are simply different ways of comparing sides. Identities let you transform an expression without changing its value.",formula:"sin²θ+cos²θ=1 and tanθ=sinθ/cosθ.",example:"If sinθ=3/5 for an acute angle, cosθ=4/5.",trap:"Wrong quadrant sign, degree/radian confusion, and using an identity in the wrong form.",practice:"For acute θ with cosθ=5/13, find sinθ.",flash:["Ratios","Identities","Heights & distances","Inverse functions"]},
 probability:{name:"Probability",definition:"Probability measures how likely an event is, from impossible (0) to certain (1).",intuition:"First list the full sample space. Then count the outcomes that satisfy the event. The denominator is the total valid outcomes when they are equally likely.",formula:"P(E)=favourable outcomes/total outcomes for equally likely outcomes.",example:"A fair die has three even outcomes out of six, so P(even)=1/2.",trap:"Double-counting, forgetting the sample space, and treating unequal outcomes as equally likely.",practice:"A bag has 3 red and 2 blue balls. Find P(red) on one draw.",flash:["Sample space","Conditional probability","Bayes","Independence"]},
 calculus:{name:"Calculus",definition:"Calculus studies change and accumulation. Differentiation gives a rate of change; integration accumulates quantities and reverses differentiation.",intuition:"A derivative asks 'how fast is this changing right now?'. An integral asks 'how much has accumulated?'.",formula:"d(xⁿ)/dx=nxⁿ⁻¹ and ∫xⁿdx=xⁿ⁺¹/(n+1)+C for n≠−1.",example:"d(x³)/dx=3x². For ∫x²dx, increase the power to 3 and divide by 3, then add C.",trap:"Dropping C in indefinite integration, applying the power rule to the wrong part, and confusing derivative with value.",practice:"Differentiate 4x³−2x.",flash:["Limits","Derivatives","Applications","Integration"]},
 matrices:{name:"Matrices & Determinants",definition:"A matrix is a rectangular arrangement of numbers used to organise equations and transformations.",intuition:"Treat a matrix as a structured table. Determinants give a compact test for invertibility in square matrices.",formula:"For [[a,b],[c,d]], det=ad−bc; an inverse exists when det≠0.",example:"det([[2,1],[3,4]])=8−3=5.",trap:"Sign errors and multiplying matrices in the wrong order.",practice:"Find det([[3,2],[1,5]]).",flash:["Determinant","Inverse","Rank","Linear equations"]},
 physics:{name:"Physics",definition:"Physics models motion, forces, energy and other measurable phenomena using quantities, units and relationships.",intuition:"Convert the words into known quantities first. Then choose the equation that contains the unknown and the quantities you actually know.",formula:"For constant acceleration: v=u+at, s=ut+½at², v²=u²+2as.",example:"From rest, a=2 m/s² for 5 s gives v=0+2×5=10 m/s.",trap:"Mixed units, wrong equation, and forgetting direction/sign.",practice:"A body starts from rest and accelerates at 3 m/s² for 4 s. Find v.",flash:["Mechanics","Heat","Waves","Optics","Electricity"]},
 english:{name:"English",definition:"NDA English tests precise language use: vocabulary, grammar, sentence meaning and comprehension.",intuition:"Do not choose an option just because it sounds familiar. Check the exact meaning and how it fits the sentence.",formula:"Check subject–verb agreement, tense, articles, prepositions and context.",example:"Meticulous means very careful about details.",trap:"Ignoring context and choosing a near-synonym with the wrong meaning.",practice:"Choose the closest meaning of 'meticulous'.",flash:["Vocabulary","Synonyms","Antonyms","Grammar","Comprehension"]},
 history:{name:"History",definition:"History becomes easier when events are linked as cause → event → consequence instead of memorised as isolated dates.",intuition:"For every event ask: what caused it, what happened, who was involved, and what changed afterwards.",formula:"Revise modern India using timeline + causes + leaders + events + outcomes.",example:"The Revolt of 1857 began at Meerut before spreading to other centres.",trap:"Memorising dates without sequence, cause or consequence.",practice:"Arrange major events in chronological order.",flash:["Ancient","Medieval","Modern","Freedom movement"]},
 geography:{name:"Geography",definition:"Geography explains where things are and why they occur there.",intuition:"Use the chain: location → physical process → climate/relief → human effect.",formula:"For any place ask: where, why there, and what process explains it?",example:"Most weather phenomena occur in the troposphere.",trap:"Confusing layers, locations and climate mechanisms.",practice:"Which atmospheric layer contains most weather?",flash:["Physical geography","India","Climate","Rivers","Resources"]},
 chemistry:{name:"Chemistry",definition:"Chemistry studies matter, its structure, properties and transformations.",intuition:"Look for patterns: atomic structure controls periodic behaviour; bonding explains structure; balanced equations control calculations.",formula:"Balance chemical equations before mole or stoichiometric calculations.",example:"18 g of water corresponds to 1 mole because its molar mass is 18 g/mol.",trap:"Unbalanced equations, unit mistakes and confusing atoms, ions and molecules.",practice:"How many moles are present in 36 g of water?",flash:["Atomic structure","Periodic table","Bonding","Mole concept","Reactions"]}
};

function pick(q){
 const s=q.toLowerCase();
 if(/trigon|sin|cos|tan|angle/.test(s))return"trigonometry";
 if(/probab|chance|sample space/.test(s))return"probability";
 if(/calculus|derivative|differentiat|integrat|limit/.test(s))return"calculus";
 if(/matrix|determinant|inverse matrix/.test(s))return"matrices";
 if(/physics|force|motion|velocity|acceleration|energy|optics|electric/.test(s))return"physics";
 if(/english|grammar|vocab|synonym|antonym|sentence/.test(s))return"english";
 if(/history|revolt|freedom|empire|war/.test(s))return"history";
 if(/geography|climate|river|soil|atmosphere|map/.test(s))return"geography";
 if(/chemistry|mole|atom|bond|reaction|periodic/.test(s))return"chemistry";
 return"algebra";
}
function solveLinear(q){
 const m=q.match(/([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*=\s*(-?\d+\.?\d*)/i);
 if(!m)return null;
 const a=m[1].replace(/\s/g,""); const A=(a===""||a==="+")?1:a==="-"?-1:Number(a);
 const B=Number(m[2].replace(/\s/g,"")); const C=Number(m[3]); if(!A)return null;
 return (C-B)/A;
}
function deepFromText(text){
 const clean=text.replace(/\s+/g," ").trim();
 const sentences=(clean.match(/[^.!?]+[.!?]+/g)||[]).map(s=>s.trim()).filter(s=>s.length>25);
 const bullets=sentences.slice(0,8);
 const formulas=(clean.match(/[^.]{0,100}(?:=|²|³|∫|√|sin|cos|tan|P\()[^.]{0,120}/gi)||[]).slice(0,8).map(s=>s.trim());
 const words=(clean.match(/\b[A-Za-z][A-Za-z-]{7,}\b/g)||[]).filter((v,i,a)=>a.indexOf(v)===i).slice(0,8);
 return {sourceSummary:clean.slice(0,900),keyPoints:bullets,formulas,glossary:words,practice:"Write 5 one-line questions from the uploaded material, answer them without looking, then check each answer against the source."};
}
export default async function(req,res){
 const q=String(req.body?.question||"").trim();
 const level=String(req.body?.level||"beginner");
 const mode=String(req.body?.mode||"explain");
 const sourceText=String(req.body?.source_text||"").trim().slice(0,60000);
 const useGemini=Boolean(req.body?.use_gemini);
 if(!q && !sourceText)return res.status(400).json({error:"question required"});
 if(useGemini && q){
   try{
     const prompt="You are an expert NDA teacher. Give a deep, exam-ready explanation. Structure it as: 1) simple definition, 2) intuition, 3) prerequisites, 4) formulas/rules, 5) worked example step-by-step, 6) common NDA traps, 7) 3 practice MCQs with answers and explanations, 8) 30-second revision. Be accurate and beginner-friendly.";
     const out=await ai.generateText({model:"gemini-pro",prompt:prompt+"\n\nStudent question: "+q,purpose:"nda-tutor",asUser:req.member.id});
     return res.json({answer:out.text,topic:"Gemini Pro — NDA Tutor",mode:"optional_gemini_pro",provider_required:true,provider:"google",depth:"Advanced Gemini explanation"});
   }catch(e){
     // Optional AI never breaks the free core. Fall through to the built-in tutor.
   }
 }
 if(sourceText){
   const d=deepFromText(sourceText);
   const topic=q||"Uploaded study material";
   const depth=level==="advanced"?"Deep exam analysis":"Clear exam-ready explanation";
   const answer="DEEP STUDY GUIDE — "+topic+"\n\nSOURCE\n"+d.sourceSummary+"\n\nKEY POINTS\n"+(d.keyPoints.length?d.keyPoints.map((x,i)=>(i+1)+". "+x).join("\n"):"Read the source carefully and extract the definitions, formulas and examples.")+"\n\nFORMULAS / IMPORTANT EXPRESSIONS\n"+(d.formulas.length?d.formulas.map(x=>"• "+x).join("\n"):"No formula-like expression was detected automatically.")+"\n\nHOW TO REMEMBER\nConnect each key point to a definition, one example, and one possible MCQ. Revise the hardest two points again after 10 minutes.\n\nEXAM TRAPS\n• Do not add facts that are not supported by your uploaded source.\n• Watch units, signs, definitions and option wording.\n• For factual topics, learn cause → fact → consequence where applicable.\n\nMINI TEST\n"+d.practice+"\n\nQUICK RECALL\n"+(d.glossary.length?d.glossary.join(" • "):"definitions • formulas • examples • exceptions");
   return res.json({answer,topic,mode:"free_file_deep_tutor",provider_required:false,depth,sections:d});
 }
 const key=pick(q), k=kb[key];
 let answer, sections={};
 if(mode==="solve"){
   const solved=solveLinear(q);
   answer=solved!==null
    ? "STEP-BY-STEP SOLUTION\n\n1. Identify the equation.\n2. Move the constant term to the other side.\n3. Divide by the coefficient of x.\n4. Substitute the result back to verify.\n\nFINAL ANSWER\nx = "+solved+"\n\nWHY THIS WORKS\nAn equation stays balanced when the same operation is applied to both sides."
    : "NDA SOLVING METHOD\n\n1. Write the given data.\n2. Identify the concept.\n3. Choose the smallest valid formula.\n4. Substitute carefully.\n5. Check units, signs and whether the option is reasonable.\n\nSend the exact equation or question for a worked solution.";
 } else if(mode==="quiz"){
   answer="TUTOR QUIZ MODE\n\nTopic: "+k.name+"\n\nQUESTION\n"+k.practice+"\n\nHINT\n"+k.formula+"\n\nDo it without looking up the answer. Send your answer back for the next step.";
 } else if(mode==="flashcards"){
   answer="FLASHCARD MODE — "+k.name+"\n\n"+k.flash.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\n5-MINUTE METHOD\nDefine each item → write one formula/example → hide it → recall it aloud → mark the weak card.";
 } else if(mode==="strategy"){
   answer="NDA EXAM STRATEGY — "+k.name+"\n\n1. Read the stem fully.\n2. Identify the exact concept.\n3. Estimate when possible.\n4. Eliminate impossible options.\n5. Calculate cleanly.\n6. Check units/signs.\n7. If the question is consuming too much time, move on and return later.";
 } else {
   const deep=level==="advanced";
   answer=(deep?"DEEP EXPLANATION — ":"CONCEPT — ")+k.name+"\n\nWHAT IT MEANS\n"+k.definition+"\n\nINTUITION\n"+k.intuition+"\n\nKEY FORMULA / RULE\n"+k.formula+"\n\nWORKED NDA-STYLE EXAMPLE\n"+k.example+"\n\nSTEP-BY-STEP THINKING\n1. Identify what is given.\n2. Identify what is asked.\n3. Match the concept or formula.\n4. Work one clean step at a time.\n5. Check the result against the options and units.\n\nCOMMON TRAPS\n"+k.trap+"\n\nPRACTICE NOW\n"+k.practice+"\n\nQUICK REVISION\n"+k.flash.join(" • ")+(deep?"\n\nDEEP CHECK\nExplain the idea in your own words, solve the practice question without looking, then create one new question from the same concept.":"");
 }
 sections={definition:k.definition,intuition:k.intuition,formula:k.formula,example:k.example,trap:k.trap,practice:k.practice,flashcards:k.flash};
 res.json({answer,topic:k.name,mode:"free_advanced_tutor",provider_required:false,capabilities:["deep_explanation","step_by_step","solve_simple_linear_equations","quiz_mode","flashcards","exam_strategy","mistake_detection"],sections});
}