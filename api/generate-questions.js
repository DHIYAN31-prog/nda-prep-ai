export const access="member";
export const methods=["POST"];

const banks={
  Mathematics:{
    Algebra:[
      ["If x+3=11, what is x?",["A) 6","B) 7","C) 8","D) 9"],"C","Subtract 3 from both sides: x=8."],
      ["If 2x−5=9, what is x?",["A) 2","B) 5","C) 7","D) 9"],"C","2x=14, so x=7. The correct option is C."],
      ["The roots of x²−5x+6=0 are:",["A) 1,6","B) 2,3","C) −2,−3","D) 3,4"],"B","Factor as (x−2)(x−3)=0, giving 2 and 3."]
    ],
    Trigonometry:[
      ["If sin²θ+cos²θ=1 and sinθ=3/5, for an acute θ, cosθ is:",["A) 2/5","B) 3/5","C) 4/5","D) 5/4"],"C","cos²θ=1−9/25=16/25, so cosθ=4/5."]
    ],
    Probability:[
      ["A fair die is thrown once. Probability of getting an even number is:",["A) 1/6","B) 1/3","C) 1/2","D) 2/3"],"C","Even outcomes are 2,4,6: 3 out of 6, so probability is 1/2."]
    ]
  },
  GAT:{
    Physics:[
      ["The SI unit of force is:",["A) Joule","B) Newton","C) Watt","D) Pascal"],"B","Force is measured in newtons (N)."],
      ["If a body starts from rest with acceleration 2 m/s² for 5 s, its final velocity is:",["A) 5 m/s","B) 7 m/s","C) 10 m/s","D) 25 m/s"],"C","Using v=u+at: 0+2×5=10 m/s."]
    ],
    Chemistry:[
      ["The smallest unit of an element that retains its chemical identity is commonly called:",["A) Atom","B) Molecule","C) Cell","D) Ion"],"A","An atom is the basic unit of an element."]
    ],
    English:[
      ["Choose the closest meaning of 'vigilant':",["A) Careless","B) Watchful","C) Confused","D) Slow"],"B","Vigilant means watchful and alert."]
    ],
    History:[
      ["The Revolt of 1857 began at:",["A) Delhi","B) Meerut","C) Kanpur","D) Lucknow"],"B","The uprising began at Meerut in May 1857."]
    ],
    Geography:[
      ["Which layer of the atmosphere contains most weather phenomena?",["A) Troposphere","B) Stratosphere","C) Mesosphere","D) Thermosphere"],"A","Most clouds and weather occur in the troposphere."]
    ]
  }
};

function normalizeSubject(s){return s==="English"||s==="Physics"||s==="Chemistry"||s==="History"||s==="Geography"?"GAT":s==="GAT"?"GAT":"Mathematics"}

export default async function(req,res){
  const subject=normalizeSubject(String(req.body?.subject||"Mathematics"));
  const topic=String(req.body?.topic||"Algebra");
  const difficulty=String(req.body?.difficulty||"Hard");
  const count=Math.min(10,Math.max(1,Number(req.body?.count||5)));
  const subjectBank=banks[subject]||banks.Mathematics;
  const key=Object.keys(subjectBank).find(k=>k.toLowerCase()===topic.toLowerCase())||Object.keys(subjectBank)[0];
  const source=subjectBank[key]||banks.Mathematics.Algebra;
  const questions=[];
  for(let i=0;i<count;i++){
    const item=source[i%source.length];
    questions.push({
      question:item[0],
      options:item[1],
      answer:item[2],
      explanation:item[3],
      difficulty,
      topic:key,
      marks:subject==="Mathematics"?2.5:4,
      negative_marks:subject==="Mathematics"?2.5/3:4/3,
      source:"NDA Prep AI free practice bank",
      original:true
    });
  }
  res.json({questions,mode:"free_core_bank",provider_required:false});
}