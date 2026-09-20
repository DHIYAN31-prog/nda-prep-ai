export const access="member";
export const methods=["POST"];

const kb={
 algebra:{name:"Algebra",core:"Algebra is about unknowns and relationships.",formula:"For a linear equation, isolate the unknown by doing the same operation on both sides.",example:"If 2x − 5 = 9, add 5 to both sides and divide by 2, giving x = 7.",mistakes:"Sign changes, skipping a step, and not checking the final value.",practice:"Solve 3x + 7 = 22.",flash:["Linear equations","Quadratic equations","Sequences","Binomial theorem"]},
 trigonometry:{name:"Trigonometry",core:"Trigonometry connects angles with ratios and identities.",formula:"sin²θ + cos²θ = 1; tanθ = sinθ/cosθ.",example:"If sinθ = 3/5 for an acute angle, cosθ = 4/5.",mistakes:"Wrong quadrant sign, degree/radian confusion, and applying an identity to the wrong expression.",practice:"For an acute θ with cosθ = 5/13, find sinθ.",flash:["Basic ratios","Identities","Heights & distances","Inverse functions"]},
 probability:{name:"Probability",core:"Probability measures how likely an event is.",formula:"For equally likely outcomes, P(E)=favourable outcomes/total outcomes.",example:"A fair die has three even outcomes out of six, so P(even)=1/2.",mistakes:"Double-counting outcomes and forgetting the sample space.",practice:"A bag has 3 red and 2 blue balls. What is P(red) on one draw?",flash:["Sample space","Conditional probability","Bayes","Independent events"]},
 calculus:{name:"Calculus",core:"Differentiation measures rate of change; integration accumulates and reverses differentiation.",formula:"d(xⁿ)/dx = n xⁿ⁻¹ and ∫xⁿdx=xⁿ⁺¹/(n+1)+C for n≠−1.",example:"d(x³)/dx = 3x².",mistakes:"Losing the constant of integration or applying the power rule incorrectly.",practice:"Differentiate 4x³ − 2x.",flash:["Limits","Derivatives","Applications","Integration"]},
 matrices:{name:"Matrices & Determinants",core:"Matrices organise numbers and support systems of equations and transformations.",formula:"For [[a,b],[c,d]], det=ad−bc; an inverse exists when det≠0.",example:"det([[2,1],[3,4]])=8−3=5.",mistakes:"Sign errors in determinants and multiplying matrices in the wrong order.",practice:"Find the determinant of [[3,2],[1,5]].",flash:["Determinant","Inverse","Rank","Linear equations"]},
 physics:{name:"Physics",core:"NDA physics is strongest when you translate words into known quantities and units.",formula:"For constant acceleration: v=u+at, s=ut+½at², v²=u²+2as.",example:"From rest, a=2 m/s² for 5 s gives v=10 m/s.",mistakes:"Mixing units, using the wrong equation, and forgetting direction/sign.",practice:"A body starts from rest and accelerates at 3 m/s² for 4 s. Find v.",flash:["Mechanics","Heat","Waves","Optics","Electricity"]},
 english:{name:"English",core:"NDA English rewards vocabulary, grammar, comprehension and precise usage.",formula:"For grammar, check subject–verb agreement, tense, articles, prepositions and sentence meaning.",example:"Vigilant means watchful and alert.",mistakes:"Choosing a familiar word without checking context and ignoring grammar agreement.",practice:"Choose the closest meaning of 'meticulous'.",flash:["Vocabulary","Synonyms","Antonyms","Grammar","Comprehension"]},
 history:{name:"History",core:"Build history as cause → event → consequence and connect events on a timeline.",formula:"For modern India, revise major movements with causes, leaders, events and outcomes.",example:"The Revolt of 1857 began at Meerut before spreading to other centres.",mistakes:"Memorising isolated dates without sequence or cause.",practice:"Arrange major events in chronological order.",flash:["Ancient","Medieval","Modern","Freedom movement"]},
 geography:{name:"Geography",core:"Connect location with relief, climate, rivers, soils, vegetation and human activity.",formula:"Always ask: where, why there, and what physical process explains it?",example:"Most weather phenomena occur in the troposphere.",mistakes:"Confusing physical layers, locations and climate mechanisms.",practice:"Which atmospheric layer contains most weather?",flash:["Physical geography","India","Climate","Rivers","Resources"]},
 chemistry:{name:"Chemistry",core:"Learn chemistry through patterns, equations and units.",formula:"Balance chemical equations before using mole or stoichiometric calculations.",example:"An atom is the basic unit of an element that retains its chemical identity.",mistakes:"Unbalanced equations, unit mistakes and confusing atoms, ions and molecules.",practice:"How many moles are present in 18 g of water?",flash:["Atomic structure","Periodic table","Bonding","Mole concept","Reactions"]}
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
export default async function(req,res){
 const q=String(req.body?.question||"").trim();
 const level=String(req.body?.level||"beginner");
 const mode=String(req.body?.mode||"explain");
 if(!q)return res.status(400).json({error:"question required"});
 const key=pick(q), k=kb[key];
 let answer;
 if(mode==="solve"){
   const solved=solveLinear(q);
   answer=solved!==null
    ? "I found a linear equation in your question.\n\nStep 1: Identify the coefficient of x and the constant.\nStep 2: Move the constant to the other side.\nStep 3: Divide by the coefficient of x.\n\nFinal answer: x = "+solved+"\n\nAlways substitute the value back into the original equation to verify it."
    : "Let's solve it NDA-style: write the given data, identify the concept, choose the smallest valid formula, substitute carefully, check units/signs, and verify the result.";
 } else if(mode==="quiz"){
   answer="TUTOR QUIZ MODE\n\nTopic: "+k.name+"\n\nTry this without looking up the answer:\n"+k.practice+"\n\nHint: "+k.formula+"\n\nSend your answer back and I will explain the reasoning.";
 } else if(mode==="flashcards"){
   answer="FLASHCARD MODE — "+k.name+"\n\n"+k.flash.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\nUse these as a 5-minute recall drill: define each item, write one formula/example, then test yourself.";
 } else if(mode==="strategy"){
   answer="NDA EXAM STRATEGY — "+k.name+"\n\n1. Read the stem completely.\n2. Identify exactly what is being tested.\n3. Estimate the answer before calculating when possible.\n4. Eliminate impossible options.\n5. Calculate cleanly and check units/signs.\n6. If a question is consuming too much time, mark it and move on.";
 } else {
   const levelLine=level==="advanced"?"Connect the concept to a multi-step NDA application and check your reasoning against the options.":level==="intermediate"?"After the concept, solve one timed objective question and review the error pattern.":"Start from the definition, then one simple example, then a short practice question.";
   answer="CONCEPT — "+k.name+"\n\n"+k.core+"\n\nKEY IDEA\n"+k.formula+"\n\nNDA EXAMPLE\n"+k.example+"\n\nHOW TO STUDY IT\n"+levelLine+"\n\nCOMMON MISTAKES\n"+k.mistakes+"\n\nPRACTICE NOW\n"+k.practice+"\n\nQUICK REVISION\n"+k.flash.join(" • ");
 }
 res.json({answer,topic:k.name,mode:"free_advanced_tutor",provider_required:false,capabilities:["explain","solve_simple_linear_equations","quiz_mode","flashcards","exam_strategy","mistake_detection"]});
}