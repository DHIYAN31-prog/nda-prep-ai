export const access="public";
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
   ["Choose the correct sentence:",["A) He go to school.","B) He going to school.","C) He goes to school.","D) He gone to school."],"C","With singular subject 'He', the present simple verb is 'goes'."],
   ["Each of the cadets ___ ready.",["A) is","B) are","C) were","D) be"],"A","Each takes a singular verb."],
   ["Neither the teacher nor the students ___ late.",["A) are","B) is","C) was","D) has"],"A","With neither...nor, the verb generally agrees with the nearer subject."],
   ["She ___ to school every day.",["A) goes","B) went","C) going","D) has gone"],"A","A habitual action takes the simple present."],
   ["They ___ the match yesterday.",["A) won","B) win","C) have won","D) winning"],"A","A completed action with 'yesterday' takes simple past."],
   ["I ___ my work before he arrived.",["A) had finished","B) finish","C) will finish","D) am finishing"],"A","Past perfect shows the earlier of two past actions."],
   ["He is ___ honest officer.",["A) an","B) a","C) the","D) no article"],"A","Use 'an' before a vowel sound; honest begins with a vowel sound."],
   ["He is good ___ mathematics.",["A) at","B) in","C) on","D) for"],"A","The standard collocation is 'good at'."],
   ["The train arrived ___ time.",["A) on","B) in","C) at","D) by"],"A","'On time' means punctually."],
   ["This is the student ___ won the prize.",["A) who","B) which","C) whom","D) whose"],"A","Who is used as the subject for people."],
   ["The man to ___ I spoke was helpful.",["A) whom","B) who","C) which","D) whose"],"A","After a preposition, 'whom' is the traditional formal object form."],
   ["This is the ___ of the two plans.",["A) better","B) best","C) good","D) more good"],"A","For comparison of two, use the comparative 'better'."],
   ["She sings ___.",["A) beautifully","B) beautiful","C) beauty","D) more beautiful"],"A","An adverb modifies the verb 'sings'."],
   ["Work hard ___ you will succeed.",["A) and","B) but","C) or","D) because"],"A","'And' joins the two coordinated clauses here."],
   ["You ___ obey the rules.",["A) must","B) might","C) could","D) would"],"A","Must expresses strong obligation."],
   ["The police arrested the thief. Choose passive.",["A) The thief was arrested by the police.","B) The thief arrested the police.","C) The police was arrested.","D) The thief is arresting."],"A","The object becomes the subject; use was + past participle."],
   ["They will complete the work. Passive:",["A) The work will be completed by them.","B) The work completed them.","C) The work was complete.","D) They will be completed by the work."],"A","Future passive uses will be + past participle."],
   ["He said, 'I am tired.' Reported speech:",["A) He said that he was tired.","B) He says that I am tired.","C) He said that I am tired.","D) He told I was tired."],"A","A past reporting verb commonly backshifts present 'am' to 'was'."],
   ["Find the error: He do not know the answer.",["A) do","B) know","C) the","D) answer"],"A","Third-person singular 'he' takes 'does not'."],
   ["Choose the correct expression.",["A) I prefer tea to coffee.","B) I prefer tea than coffee.","C) I prefer tea from coffee.","D) I prefer tea by coffee."],"A","The standard construction is 'prefer X to Y'."],
   ["Unless you work hard, you ___ fail.",["A) will","B) would","C) have","D) had"],"A","First conditional: unless + present, main clause commonly uses will."],
   ["In 'He ran quickly', quickly is a:",["A) adverb","B) adjective","C) noun","D) preposition"],"A","Quickly modifies the verb 'ran'."],
   ["Neither of the answers ___ correct.",["A) is","B) are","C) were","D) have"],"A","Neither is singular in standard exam usage."],
   ["The number of students ___ increasing.",["A) is","B) are","C) were","D) have"],"A","'The number of' takes a singular verb."],
   ["She is accustomed to ___ early.",["A) getting up","B) get up","C) got up","D) gets up"],"A","'Accustomed to' is followed by a noun/gerund here."],
   ["No sooner did he arrive ___ it started raining.",["A) than","B) when","C) then","D) but"],"A","The standard pair is 'no sooner...than'."],
   ["Hardly had I reached the station ___ the train left.",["A) when","B) than","C) then","D) and"],"A","The standard pair is 'hardly...when'."],
   ["The news ___ true.",["A) is","B) are","C) were","D) have"],"A","'News' is singular in standard English."],
   ["Choose the correct sentence.",["A) She has fewer books than I do.","B) She has less books than I do.","C) She has few books than I do.","D) She has lesser books than I do."],"A","Use 'fewer' with countable plural nouns."],
   ["Choose the correct sentence.",["A) Between you and me, this is difficult.","B) Between you and I, this is difficult.","C) Between you and myself, this is difficult.","D) Between I and you, this is difficult."],"A","After the preposition 'between', use object pronouns."],
   ["Choose the closest meaning of 'abate'.",["A) increase","B) reduce","C) ignore","D) create"],"B","Abate means to become or make less intense."],
   ["Choose the closest meaning of 'audacious'.",["A) timid","B) bold","C) ordinary","D) careless"],"B","Audacious means bold and daring."],
   ["Choose the opposite of 'benevolent'.",["A) generous","B) kind","C) malevolent","D) helpful"],"C","Malevolent means wishing harm; it is the opposite of benevolent."],
   ["Choose the closest meaning of 'plausible'.",["A) reasonable","B) impossible","C) ancient","D) noisy"],"A","Plausible means seeming reasonable or believable."],
   ["Choose the opposite of 'obsolete'.",["A) outdated","B) modern","C) useless","D) old"],"B","Modern is opposite in meaning to obsolete."],
   ["Choose the closest meaning of 'scrutinize'.",["A) examine closely","B) avoid","C) simplify","D) announce"],"A","Scrutinize means examine closely."]
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
  ],
  Polity:[
   ["Fundamental Rights are contained in which Part of the Constitution?",["A) Part II","B) Part III","C) Part IV","D) Part V"],"B","Fundamental Rights are in Part III."],
   ["The Parliament of India consists of:",["A) Lok Sabha only","B) Rajya Sabha only","C) President and two Houses","D) Supreme Court and two Houses"],"C","The Constitution defines Parliament as the President and the two Houses."],
   ["The constitutional head of the Union executive is the:",["A) Prime Minister","B) President","C) Chief Justice","D) Speaker"],"B","The President is the constitutional head of the Union executive."]
  ],
  Economics:[
   ["GDP measures the value of:",["A) Final goods and services produced within an economy","B) Only exports","C) Only government spending","D) Only agricultural output"],"A","GDP measures the market value of final goods and services produced within a territory over a period."],
   ["Inflation refers to a sustained rise in the:",["A) General price level","B) Population only","C) Export volume only","D) Literacy rate"],"A","Inflation is a sustained increase in the general price level."],
   ["Monetary policy in India is primarily conducted by the:",["A) RBI","B) UPSC","C) Election Commission","D) Parliament Secretariat"],"A","The Reserve Bank of India is the monetary authority responsible for monetary policy."]
  ],
  Sociology:[
   ["Sociology primarily studies:",["A) Society and social relationships","B) Chemical reactions","C) Planetary motion","D) Cell structure"],"A","Sociology is the systematic study of society and social relationships."],
   ["A family is commonly classified as a:",["A) Social institution","B) Chemical compound","C) Physical force","D) Planetary system"],"A","Family is a major social institution."],
   ["Culture includes:",["A) Shared values, beliefs and practices","B) Only biological traits","C) Only weather patterns","D) Only economic prices"],"A","Culture includes learned and shared patterns such as values, beliefs and practices."]
  ]
 }
};
function norm(s){return /^(English|Physics|Chemistry|History|Geography|Polity|Economics|Sociology)$/.test(s)?"GAT":s==="GAT"?"GAT":"Mathematics";}
function allMixed(){return Object.entries(banks).flatMap(([subject,topics])=>Object.entries(topics).flatMap(([topic,qs])=>qs.map(q=>[subject,topic,q])));}
export default async function(req,res){
 const raw=String(req.body?.subject||"Mathematics"), topic=String(req.body?.topic||"Algebra"), difficulty=String(req.body?.difficulty||"Hard");
 const count=Math.min(20,Math.max(1,Number(req.body?.count||10)));
 let source=[];
 const subject=norm(raw);
 if(raw==="Daily Quiz"){
  source=allMixed().map(x=>x[2]);
 } else {
  const bank=/^(English|Physics|Chemistry|History|Geography|Polity|Economics|Sociology)$/.test(raw) ? {[raw]:banks.GAT[raw]} : (banks[subject]||banks.Mathematics);
  if(topic==="Mixed"){
   source=Object.values(bank).flat();
  } else {
   const key=Object.keys(bank).find(k=>k.toLowerCase()===topic.toLowerCase())||Object.keys(bank)[0];
   source=bank[key]||Object.values(bank)[0]||banks.Mathematics.Algebra;
  }
 }
 const questions=[];
 for(let i=0;i<count;i++){const item=source[i%source.length];questions.push({question:item[0],options:item[1],answer:item[2],explanation:item[3],difficulty,topic:topic==="Mixed"||raw==="Daily Quiz"?"Mixed":topic,marks:norm(raw)==="Mathematics"?2.5:4,negative_marks:norm(raw)==="Mathematics"?2.5/3:4/3,source:"NDA Prep AI original practice bank",original:true});}
 res.json({questions,mode:"free_expanded_bank",provider_required:false,bank_size:source.length});
}