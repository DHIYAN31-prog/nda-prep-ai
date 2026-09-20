export const access="member";
export const methods=["POST"];
const banks={
 Mathematics:{
  Algebra:[
   ["If x+3=11, what is x?",["A) 6","B) 7","C) 8","D) 9"],"C","Subtract 3 from both sides: x=8."],
   ["If 2x−5=9, what is x?",["A) 2","B) 5","C) 7","D) 9"],"C","2x=14, so x=7."],
   ["The roots of x²−5x+6=0 are:",["A) 1,6","B) 2,3","C) −2,−3","D) 3,4"],"B","(x−2)(x−3)=0, so the roots are 2 and 3."],
   ["If a+b=10 and ab=21, then a²+b² is:",["A) 42","B) 58","C) 79","D) 100"],"B","a²+b²=(a+b)²−2ab=100−42=58."],
   ["The value of 3²+4² is:",["A) 7","B) 12","C) 25","D) 49"],"C","9+16=25."],
   ["If 5x−2=3x+10, x equals:",["A) 4","B) 5","C) 6","D) 8"],"C","2x=12, so x=6."]
  ],
  Trigonometry:[
   ["If sin²θ+cos²θ=1 and sinθ=3/5 for acute θ, cosθ is:",["A) 2/5","B) 3/5","C) 4/5","D) 5/4"],"C","cos²θ=16/25 and acute θ gives cosθ=4/5."],
   ["tan45° equals:",["A) 0","B) 1","C) √3","D) 2"],"B","tan45°=1."],
   ["If tanθ=3/4 for acute θ, secθ is:",["A) 4/3","B) 5/4","C) 3/5","D) 5/3"],"B","A 3-4-5 triangle gives secθ=5/4."],
   ["sin30° equals:",["A) 0","B) 1/2","C) √3/2","D) 1"],"B","sin30°=1/2."],
   ["cos60° equals:",["A) 0","B) 1/2","C) √3/2","D) 1"],"B","cos60°=1/2."]
  ],
  Probability:[
   ["A fair die is thrown once. Probability of an even number is:",["A) 1/6","B) 1/3","C) 1/2","D) 2/3"],"C","Three even outcomes occur among six equally likely outcomes."],
   ["A coin is tossed twice. Probability of two heads is:",["A) 1/4","B) 1/3","C) 1/2","D) 3/4"],"A","Only HH is favourable among HH, HT, TH, TT."],
   ["A bag has 3 red and 2 blue balls. Probability of red on one draw is:",["A) 2/5","B) 3/5","C) 1/2","D) 3/2"],"B","There are 3 favourable outcomes among 5 balls."],
   ["A number is chosen from 1 to 10. Probability it is a multiple of 3 is:",["A) 1/5","B) 3/10","C) 1/3","D) 1/2"],"B","Multiples are 3, 6 and 9: 3 out of 10."]
  ],
  Calculus:[
   ["d(x³)/dx equals:",["A) x²","B) 2x²","C) 3x²","D) 3x³"],"C","Power rule gives 3x²."],
   ["∫2x dx equals:",["A) x²+C","B) 2x²+C","C) x+C","D) 2x+C"],"A","The antiderivative of 2x is x²+C."],
   ["d(5x²−3x)/dx equals:",["A) 5x−3","B) 10x−3","C) 10x+3","D) 5x²−3"],"B","Differentiate each term: 10x−3."],
   ["∫3x² dx equals:",["A) x³+C","B) 3x³+C","C) x²+C","D) 6x+C"],"A","The antiderivative is x³+C."]
  ],
  Matrices:[
   ["For [[2,1],[3,4]], the determinant is:",["A) 3","B) 5","C) 8","D) 11"],"B","2×4−1×3=5."],
   ["A 2×2 matrix has an inverse when its determinant is:",["A) zero","B) non-zero","C) negative only","D) one only"],"B","A square matrix is invertible when its determinant is non-zero."],
   ["The identity matrix of order 2 is:",["A) [[0,1],[1,0]]","B) [[1,1],[0,1]]","C) [[1,0],[0,1]]","D) [[0,0],[1,1]]"],"C","The identity has ones on the main diagonal and zeros elsewhere."]
  ]
 },
 GAT:{
  Physics:[
   ["The SI unit of force is:",["A) Joule","B) Newton","C) Watt","D) Pascal"],"B","Force is measured in newtons."],
   ["A body starts from rest with acceleration 2 m/s² for 5 s. Final velocity is:",["A) 5 m/s","B) 7 m/s","C) 10 m/s","D) 25 m/s"],"C","v=u+at=0+2×5=10 m/s."],
   ["The SI unit of power is:",["A) Watt","B) Joule","C) Newton","D) Coulomb"],"A","Power is measured in watts."],
   ["If speed doubles, kinetic energy becomes:",["A) half","B) double","C) four times","D) eight times"],"C","Kinetic energy is proportional to v²."]
  ],
  Chemistry:[
   ["The basic unit of an element is commonly called:",["A) Atom","B) Molecule","C) Cell","D) Mixture"],"A","An atom retains the chemical identity of an element."],
   ["The chemical symbol for sodium is:",["A) So","B) S","C) Na","D) Sd"],"C","Sodium is represented by Na."],
   ["A neutral atom has equal numbers of:",["A) neutrons and protons","B) protons and electrons","C) electrons and neutrons","D) molecules and ions"],"B","A neutral atom has equal positive and negative charges."],
   ["Water has the formula:",["A) CO₂","B) H₂O","C) O₂","D) H₂"],"B","Water contains two hydrogen atoms and one oxygen atom."]
  ],
  English:[
   ["Closest meaning of 'vigilant':",["A) Careless","B) Watchful","C) Confused","D) Slow"],"B","Vigilant means watchful and alert."],
   ["Closest meaning of 'meticulous':",["A) Careless","B) Thorough","C) Hasty","D) Noisy"],"B","Meticulous means very careful about details."],
   ["Opposite of 'scarce' is:",["A) Rare","B) Limited","C) Abundant","D) Small"],"C","Abundant means plentiful, opposite to scarce."],
   ["Choose the correct sentence:",["A) He go to school.","B) He going to school.","C) He goes to school.","D) He gone to school."],"C","With singular subject 'He', the present simple verb is 'goes'."]
  ],
  History:[
   ["The Revolt of 1857 began at:",["A) Delhi","B) Meerut","C) Kanpur","D) Lucknow"],"B","The uprising began at Meerut in May 1857."],
   ["The Indian National Congress was founded in:",["A) 1857","B) 1885","C) 1905","D) 1919"],"B","The INC was founded in 1885."],
   ["The Quit India Movement was launched in:",["A) 1930","B) 1935","C) 1942","D) 1947"],"C","The Quit India Movement began in 1942."]
  ],
  Geography:[
   ["Most weather phenomena occur in the:",["A) Troposphere","B) Stratosphere","C) Mesosphere","D) Thermosphere"],"A","Most clouds and weather occur in the troposphere."],
   ["The longest river in India by course within India is commonly identified as:",["A) Godavari","B) Ganga","C) Narmada","D) Kaveri"],"B","The Ganga is the longest major river system within India."],
   ["The Tropic of Cancer passes through:",["A) India","B) Sri Lanka only","C) Nepal only","D) Maldives only"],"A","The Tropic of Cancer crosses India."]
  ]
 }
};
function norm(s){return s==="English"||s==="Physics"||s==="Chemistry"||s==="History"||s==="Geography"?"GAT":s==="GAT"?"GAT":"Mathematics";}
function allMixed(){return Object.entries(banks).flatMap(([subject,topics])=>Object.entries(topics).flatMap(([topic,qs])=>qs.map(q=>[subject,topic,q])));}
export default async function(req,res){
 const raw=String(req.body?.subject||"Mathematics"), topic=String(req.body?.topic||"Algebra"), difficulty=String(req.body?.difficulty||"Hard");
 const count=Math.min(20,Math.max(1,Number(req.body?.count||10)));
 let source=[];
 if(raw==="Daily Quiz"||topic==="Mixed"){source=allMixed().map(x=>x[2]);}
 else {const subject=norm(raw), bank=banks[subject]||banks.Mathematics; const key=Object.keys(bank).find(k=>k.toLowerCase()===topic.toLowerCase())||Object.keys(bank)[0]; source=bank[key]||banks.Mathematics.Algebra;}
 const questions=[];
 for(let i=0;i<count;i++){const item=source[i%source.length];questions.push({question:item[0],options:item[1],answer:item[2],explanation:item[3],difficulty,topic:topic==="Mixed"||raw==="Daily Quiz"?"Mixed":topic,marks:norm(raw)==="Mathematics"?2.5:4,negative_marks:norm(raw)==="Mathematics"?2.5/3:4/3,source:"NDA Prep AI original practice bank",original:true});}
 res.json({questions,mode:"free_expanded_bank",provider_required:false,bank_size:source.length});
}