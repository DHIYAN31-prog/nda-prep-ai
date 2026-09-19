-- Original NDA study materials: concise but substantive revision notes created for NDA Prep AI.
INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Algebra — core NDA revision',
'• Quadratic: for ax²+bx+c=0, sum of roots = −b/a and product = c/a.
• Discriminant Δ=b²−4ac: Δ>0 two real roots, Δ=0 equal roots, Δ<0 no real roots.
• AP: aₙ=a+(n−1)d; Sₙ=n/2[2a+(n−1)d].
• GP: aₙ=arⁿ⁻¹; Sₙ=a(rⁿ−1)/(r−1), r≠1.
• Binomial: (a+b)ⁿ has general term Tᵣ₊₁=C(n,r)aⁿ⁻ʳbʳ.
• Log laws: log(ab)=log a+log b; log(a/b)=log a−log b; log(aᵏ)=k log a.
Exam tip: simplify the structure before calculating.',
'Q-S-P: Quadratic, Sequence, Powers'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Algebra — core NDA revision'); 

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Matrices & determinants — exam sheet',
'• Matrix order = rows × columns.
• AB exists when columns of A = rows of B.
• det[[a,b],[c,d]]=ad−bc.
• For a square matrix, inverse exists only when determinant ≠ 0.
• For 2×2 A=[[a,b],[c,d]], A⁻¹=(1/(ad−bc))[[d,−b],[−c,a]].
• Determinant is unchanged by adding a multiple of one row to another.
• Swapping two rows changes the sign of the determinant.
• For AX=B, matrix methods can solve simultaneous equations when the coefficient matrix is invertible.',
'R-C-I: Rows/columns, Cofactor, Inverse'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Matrices & determinants — exam sheet');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Trigonometry — identities to recall',
'• sin²θ+cos²θ=1.
• 1+tan²θ=sec²θ; 1+cot²θ=cosec²θ.
• sin(A±B)=sinA cosB±cosA sinB.
• cos(A±B)=cosA cosB∓sinA sinB.
• tan(A±B)=(tanA±tanB)/(1∓tanA tanB).
• sin2A=2sinA cosA; cos2A=1−2sin²A=2cos²A−1.
• Convert degrees to radians with π radians = 180°.
• In height-and-distance problems, draw the right triangle before choosing a ratio.',
'SOH-CAH-TOA + Pythagorean identities'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Trigonometry — identities to recall');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Coordinate geometry & conics',
'• Distance between (x₁,y₁),(x₂,y₂)=√[(x₂−x₁)²+(y₂−y₁)²].
• Section formula internally in ratio m:n: ((mx₂+nx₁)/(m+n),(my₂+ny₁)/(m+n)).
• Slope m=(y₂−y₁)/(x₂−x₁).
• Parallel lines have equal slopes; perpendicular lines satisfy m₁m₂=−1 when defined.
• Circle: (x−h)²+(y−k)²=r².
• Parabola standard forms include y²=4ax and x²=4ay.
• In 3D, distance between points uses all three coordinate differences.',
'D-S-S-C: Distance, Slope, Section, Circle'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Coordinate geometry & conics');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Calculus — quick foundation',
'• Limit describes the value approached by a function.
• Continuity at x=a requires the limit, left/right limits, and f(a) to agree.
• Basic derivatives: d(xⁿ)/dx=nxⁿ⁻¹, d(sin x)/dx=cos x, d(cos x)/dx=−sin x.
• Product rule: (uv)′=u′v+uv′.
• Quotient rule: (u/v)′=(vu′−uv′)/v².
• Chain rule: derivative of f(g(x)) is f′(g(x))g′(x).
• A stationary point satisfies f′(x)=0; use the second derivative or sign change to classify it.
• Integration reverses differentiation; always include +C for an indefinite integral.',
'L-P-C: Limit, Product, Chain'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Calculus — quick foundation');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Vectors — formulas',
'• A vector has magnitude and direction; a scalar has magnitude only.
• |a|=√(a₁²+a₂²+a₃²).
• Dot product a·b=|a||b|cosθ=a₁b₁+a₂b₂+a₃b₃.
• a·b=0 means perpendicular vectors.
• Cross product magnitude = |a||b|sinθ and direction is perpendicular to both.
• Work done by constant force is F·s.
• Unit vector in direction a is a/|a|.',
'D-C-W: Dot gives cosine, Cross gives sine, Work uses dot'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Vectors — formulas');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Mathematics','Probability & statistics — high-yield',
'• Probability of an event = favourable outcomes / total equally likely outcomes.
• P(Aᶜ)=1−P(A).
• P(A∪B)=P(A)+P(B)−P(A∩B).
• Conditional probability: P(A|B)=P(A∩B)/P(B).
• For independent events, P(A∩B)=P(A)P(B).
• Mean = sum/n; median is the middle value after sorting.
• Variance measures spread; standard deviation is its square root.
• In MCQs, define the sample space before counting.',
'C-C-I: Complement, Conditional, Independence'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Probability & statistics — high-yield');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Physics','Mechanics — motion, force and energy',
'• v=u+at; s=ut+½at²; v²=u²+2as for constant acceleration.
• Newton II: F=ma. Momentum p=mv.
• Work by a constant force W=Fs cosθ.
• Power P=W/t; also P=Fv for force parallel to velocity.
• Kinetic energy = ½mv²; gravitational potential energy near Earth = mgh.
• Circular motion requires centripetal acceleration v²/r toward the centre.
• Projectile range on level ground: R=u²sin2θ/g.
Exam tip: keep units consistent before substitution.',
'V-S-F: Velocity, Space, Force'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Mechanics — motion, force and energy');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Physics','Heat, waves and optics',
'• Heat transfer: conduction, convection and radiation.
• Q=mcΔT when there is no phase change.
• During a phase change, supplied heat changes state rather than temperature.
• Wave relation: v=fλ.
• Frequency is set by the source; wave speed depends on the medium.
• Mirror/lens questions require careful sign convention.
• Refraction follows n₁sin i=n₂sin r.
• Total internal reflection requires travel from denser to rarer medium and incidence angle greater than the critical angle.',
'Q-F-L: Heat, Frequency, Light'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Heat, waves and optics');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Physics','Electricity & magnetism — essentials',
'• Ohm law: V=IR for an ohmic conductor under constant physical conditions.
• Series resistors add: R=R₁+R₂+….
• Parallel: 1/R=1/R₁+1/R₂+….
• Electrical power: P=VI=I²R=V²/R.
• Charge Q=It.
• A moving charge/current produces a magnetic field.
• Electromagnetic induction links changing magnetic flux with induced emf.
• Transformers require changing current and operate on AC in their ordinary form.',
'V-I-R + P=VI'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Electricity & magnetism — essentials');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Chemistry','Atoms, periodic trends & bonding',
'• Atomic number = number of protons; mass number = protons + neutrons.
• Isotopes have the same atomic number but different mass numbers.
• Across a period, atomic radius generally decreases while ionisation energy generally increases.
• Down a group, atomic radius generally increases.
• Ionic bonding involves electrostatic attraction between oppositely charged ions.
• Covalent bonding involves sharing electron pairs.
• Oxidation is commonly associated with loss of electrons; reduction with gain.',
'PAN: Protons, Atomic number, Neutrons'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Atoms, periodic trends & bonding');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Chemistry','Mole concept & reactions',
'• One mole contains Avogadro number of entities.
• Number of moles n = given mass / molar mass.
• For gases at the same temperature and pressure, volume ratios follow mole ratios.
• Balance equations before using stoichiometric ratios.
• Limiting reagent controls the maximum product formed.
• Acids donate H⁺ in the Brønsted-Lowry model; bases accept H⁺.
• pH decreases as hydrogen-ion concentration increases.',
'B-M-R: Balance, Moles, Ratio'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Mole concept & reactions');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Biology','Cell, genetics & human systems',
'• Cell membrane is selectively permeable.
• Mitochondria are major sites of aerobic respiration and ATP production.
• Ribosomes synthesize proteins.
• DNA stores hereditary information; genes are functional units of heredity.
• Mitosis generally produces two genetically similar daughter cells.
• Meiosis reduces chromosome number and contributes to variation.
• Nephron is the functional unit of the kidney; alveoli are the gas-exchange surfaces of lungs.',
'MR-DNA: Mitochondria, Ribosome, DNA'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Cell, genetics & human systems');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'History','Modern India — cause to consequence',
'• Build a timeline instead of memorising isolated dates.
• Permanent Settlement: 1793, associated with Cornwallis.
• Revolt of 1857: connect immediate military causes with wider political, economic and social grievances.
• Indian National Congress founded in 1885.
• Swadeshi movement followed the 1905 partition of Bengal.
• Non-Cooperation began in 1920; Civil Disobedience began in 1930.
• Quit India movement launched in 1942.
Revision method: for every event remember Cause → Date/period → People → Outcome.',
'C-D-P-O: Cause, Date, People, Outcome'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='Modern India — cause to consequence');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'Geography','India — physical geography',
'• Himalayas form the major northern mountain system and influence climate and drainage.
• Northern plains are built largely from alluvial deposits.
• Peninsular India is an older stable landmass.
• Western Ghats are generally higher and more continuous than Eastern Ghats.
• Narmada and Tapi flow westward through rift-valley regions.
• Monsoon rainfall varies greatly with relief, distance from sea and wind direction.
• Match rivers, soils, crops and climate by region rather than memorising them separately.',
'R-C-R: Relief, Climate, River'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='India — physical geography');

INSERT INTO notes (subject,title,content,mnemonic)
SELECT 'English','NDA English — scoring checklist',
'• Grammar: check subject–verb agreement, tense, articles, prepositions and pronoun use.
• Vocabulary: learn words in context, including synonyms, antonyms and common usage.
• Error spotting: read the entire sentence before choosing the error.
• Sentence improvement: preserve meaning while fixing grammar.
• Comprehension: answer from the passage first; do not import unsupported assumptions.
• Cloze tests: use grammar + meaning + collocation together.
• For speed, mark uncertain items and return after completing confident questions.',
'G-V-C: Grammar, Vocabulary, Comprehension'
WHERE NOT EXISTS (SELECT 1 FROM notes WHERE title='NDA English — scoring checklist');