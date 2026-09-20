export const access="member";
export const methods=["POST"];

const knowledge={
  algebra:"Algebra studies numbers, variables and relationships. Start by identifying the unknown, write the equation, simplify both sides, and solve step by step. NDA tip: check the final value in the original equation.",
  trigonometry:"The core identity is sin²θ + cos²θ = 1. Also remember tanθ = sinθ/cosθ. For NDA problems, first reduce angles and then choose the identity that removes the extra term.",
  probability:"Probability measures how likely an event is. For equally likely outcomes, P(E)=favourable outcomes/total outcomes. Keep the sample space clear and never count an outcome twice.",
  calculus:"Differentiation measures rate of change. The power rule is d(xⁿ)/dx = n xⁿ⁻¹. Integration reverses differentiation: ∫xⁿdx = xⁿ⁺¹/(n+1)+C for n≠−1.",
  matrices:"For a 2×2 matrix [[a,b],[c,d]], the determinant is ad−bc. A matrix has an inverse when its determinant is non-zero.",
  physics:"For uniformly accelerated motion, v=u+at, s=ut+½at² and v²=u²+2as. Write the known quantities first, keep units consistent, then select the equation with the required unknown.",
  english:"For vocabulary, learn a word with its meaning, synonym, antonym and one sentence. In grammar questions, check subject–verb agreement, tense, articles and prepositions before choosing an option.",
  history:"For modern Indian history, revise cause → event → consequence. Build short timelines instead of memorising isolated dates.",
  geography:"For geography, connect location with physical cause and effect: relief, climate, rivers, soils, vegetation and human activity.",
  chemistry:"Revise chemistry through patterns: periodic trends, bonding, mole calculations, acids/bases and common reactions. Always balance equations before calculating."
};

function pickTopic(q){
  const s=q.toLowerCase();
  if(s.includes("trigon")||s.includes("sin")||s.includes("cos")||s.includes("tan"))return "trigonometry";
  if(s.includes("probab"))return "probability";
  if(s.includes("calculus")||s.includes("derivative")||s.includes("integrat"))return "calculus";
  if(s.includes("matrix")||s.includes("determinant"))return "matrices";
  if(s.includes("physics")||s.includes("force")||s.includes("motion")||s.includes("velocity"))return "physics";
  if(s.includes("english")||s.includes("grammar")||s.includes("vocabulary")||s.includes("synonym"))return "english";
  if(s.includes("history")||s.includes("freedom")||s.includes("revolt"))return "history";
  if(s.includes("geography")||s.includes("climate")||s.includes("river"))return "geography";
  if(s.includes("chemistry")||s.includes("mole")||s.includes("bond"))return "chemistry";
  return "algebra";
}

export default async function(req,res){
  const q=String(req.body?.question||"").trim();
  const level=String(req.body?.level||"beginner");
  if(!q)return res.status(400).json({error:"question required"});
  const topic=pickTopic(q);
  const base=knowledge[topic];
  const levelLine=level==="advanced"
    ?"Try to connect the concept to a harder NDA-style application."
    :level==="intermediate"
    ?"After understanding the idea, solve one timed objective question."
    :"Start with the definition, then use one simple example.";

  res.json({
    answer:
      "FREE NDA TUTOR\n\n"+
      "Concept: "+base+"\n\n"+
      "How to approach your doubt: "+levelLine+"\n\n"+
      "Quick example: If a question looks difficult, write the given values, identify the exact concept being tested, eliminate impossible options, and then calculate.\n\n"+
      "Common mistake: Jumping to a formula before identifying what the question is asking.\n\n"+
      "Quick revision point: "+base,
    mode:"free_offline_core",
    provider_required:false
  });
}