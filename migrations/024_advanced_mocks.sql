-- Advanced original NDA-style mocks. These are newly authored practice questions, not copied UPSC questions.
INSERT INTO mock_tests (title, subject, duration_minutes, total_questions, total_marks, difficulty, instructions)
SELECT 'NDA Advanced Mathematics — Hard Set 1','Mathematics',35,10,25,'Hard','Original high-difficulty practice. No calculator. Use NDA-style negative marking: -1/3 of the question value for a wrong answer.'
WHERE NOT EXISTS (SELECT 1 FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1');

INSERT INTO mock_tests (title, subject, duration_minutes, total_questions, total_marks, difficulty, instructions)
SELECT 'NDA Advanced GAT — Hard Set 1','GAT',30,10,40,'Hard','Original high-difficulty mixed GAT practice covering Physics, Chemistry, Biology, History, Geography and English.'
WHERE NOT EXISTS (SELECT 1 FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1');

INSERT INTO mock_tests (title, subject, duration_minutes, total_questions, total_marks, difficulty, instructions)
SELECT 'NDA Battle Mock — Extreme Mixed 1','Full Syllabus',60,10,65,'Extreme','Original mixed challenge designed to be harder than routine practice. Prioritize accuracy because wrong answers carry negative marking.'
WHERE NOT EXISTS (SELECT 1 FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1');

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,1,'If the roots of x² − 6x + k = 0 are in the ratio 1:2, what is k?','6','8','9','10','B','Let roots be a and 2a. Their sum is 3a=6, so a=2. Product is 2a²=8.','Algebra'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=1);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,2,'If tan θ + cot θ = 4, then sec²θ + cosec²θ equals:','12','14','16','18','C','(tanθ+cotθ)² = tan²θ+cot²θ+2 = 16, hence tan²θ+cot²θ=14. Adding 2 gives sec²θ+cosec²θ=16.','Trigonometry'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=2);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,3,'The determinant of the matrix [[1,1,1],[1,2,4],[1,3,9]] is:','0','1','2','3','C','Subtract row 1 from rows 2 and 3. The determinant becomes det[[1,1,1],[0,1,3],[0,2,8]]=8−6=2.','Matrices'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=3);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,4,'The coefficient of x⁵ in (1+x)^8(1−x)^4 is:','−20','−14','14','20','B','Use (1+x)^8(1−x)^4=(1−x²)^4(1+x)^4. The x⁵ coefficient is (−4)(4)+(6)(4)=8.','Binomial Theorem'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=4);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,5,'If z = (1+i)/(1−i), then z^4 is:','−1','1','i','−i','B','(1+i)/(1−i)=i after multiplying numerator and denominator by 1+i. Thus z⁴=i⁴=1.','Complex Numbers'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=5);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,6,'A bag contains 5 red, 4 blue and 3 green balls. Two balls are drawn without replacement. Probability that they are of different colours is:','47/66','37/66','49/66','17/22','A','Total pairs = C(12,2)=66. Same-colour pairs = C(5,2)+C(4,2)+C(3,2)=10+6+3=19. Different-colour pairs=47.','Probability'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=6);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,7,'The angle between the lines 2x−y+1=0 and x+2y−3=0 is:','0°','45°','90°','135°','C','Their slopes are 2 and −1/2. Their product is −1, so the lines are perpendicular.','Coordinate Geometry'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=7);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,8,'If a,b,c are in GP and a+b+c=14 while abc=64, then the middle term b is:','2','4','6','8','B','For a GP, abc=b³. Hence b³=64, so b=4.','Progressions'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=8);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,9,'If f(x)=x²−2x+3, the minimum value of f(x)+f(2−x) is:','2','4','6','8','B','f(x)+f(2−x)=2x²−4x+6=2(x−1)²+4, so the minimum is 4.','Functions'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=9);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,10,'The number of positive integer solutions of x+y+z=10 is:','36','45','55','66','A','For positive variables put X=x−1, Y=y−1, Z=z−1. Then X+Y+Z=7 with nonnegative variables, giving C(9,2)=36.','Combinatorics'
FROM mock_tests WHERE title='NDA Advanced Mathematics — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=10);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,1,'A satellite moves in a circular orbit with constant speed. Which quantity is continuously changing?','Speed','Kinetic energy','Velocity','Mass','C','Velocity changes because its direction changes continuously, even though speed remains constant.','Physics'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=1);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,2,'A wire has resistance R. If its length is doubled and its radius is halved, its new resistance is:','2R','4R','8R','R/2','C','R is proportional to L/A and A is proportional to r². Doubling L gives ×2 and halving r gives area ×1/4, so total factor is 8.','Physics'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=2);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,3,'Which change increases the equilibrium yield of ammonia in N₂ + 3H₂ ⇌ 2NH₃ + heat?','Increase temperature','Decrease pressure','Increase pressure','Add an inert gas at constant volume','C','The forward reaction produces fewer gas moles and is exothermic. Increasing pressure favors the side with fewer moles.','Chemistry'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=3);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,4,'Which blood vessel carries oxygenated blood from the lungs to the heart?','Pulmonary artery','Pulmonary vein','Aorta','Vena cava','B','Pulmonary veins return oxygenated blood from the lungs to the left atrium.','Biology'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=4);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,5,'The permanent settlement of Bengal was introduced by:','Wellesley','Cornwallis','Dalhousie','Bentinck','B','Lord Cornwallis introduced the Permanent Settlement in 1793.','History'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=5);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,6,'Which Indian river is most closely associated with a rift-valley course?','Godavari','Narmada','Yamuna','Mahanadi','B','The Narmada flows through a rift valley between the Vindhya and Satpura ranges.','Geography'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=6);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,7,'Choose the word closest in meaning to “abate”:','Intensify','Reduce','Predict','Delay','B','Abate means to reduce in intensity or degree.','English'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=7);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,8,'The ozone layer is concentrated mainly in which atmospheric layer?','Troposphere','Stratosphere','Mesosphere','Thermosphere','B','Most atmospheric ozone is concentrated in the stratosphere.','Environment'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=8);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,9,'Which constitutional body recommends the distribution of tax revenues between the Union and States?','Election Commission','Finance Commission','UPSC','CAG','B','The Finance Commission is constituted under Article 280 and recommends tax devolution principles.','Polity'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=9);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,10,'If a metal is heated beyond its Curie temperature, it generally loses its:','Electrical conductivity','Ferromagnetism','Density','Malleability','B','Above the Curie temperature, a ferromagnetic material becomes paramagnetic.','Physics'
FROM mock_tests WHERE title='NDA Advanced GAT — Hard Set 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=10);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,1,'A projectile is fired at 30° and another at 60° with the same speed. Ignoring air resistance, their ranges are:','First greater','Second greater','Equal','Cannot be compared','C','Range is u² sin2θ/g. Since sin60°=sin120°=√3/2 for 30° and 60°, the ranges are equal.','Physics'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=1);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,2,'If log₂x + log₂(x−2)=3, the positive solution is:','2','3','4','6','C','x(x−2)=8 gives x²−2x−8=0, so x=4 or −2. Domain x>2 gives x=4.','Algebra'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=2);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,3,'Which statement about an ideal transformer is correct?','It changes frequency','It can increase voltage while decreasing current','It creates energy','It works only with DC','B','For an ideal transformer, power is conserved approximately, so increasing voltage reduces current.','Physics'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=3);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,4,'Which compound contains both ionic and covalent bonding?','NaCl','NH₄Cl','CH₄','CO₂','B','NH₄Cl has ionic attraction between NH₄⁺ and Cl⁻ and covalent N–H bonds within NH₄⁺.','Chemistry'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=4);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,5,'The largest component of Earth’s atmosphere by volume is:','Oxygen','Nitrogen','Carbon dioxide','Argon','B','Nitrogen makes up about 78% of dry air by volume.','Geography'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=5);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,6,'The doctrine of lapse is most closely associated with:','Curzon','Dalhousie','Ripon','Canning','B','Lord Dalhousie used the Doctrine of Lapse to annex certain princely states.','History'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=6);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,7,'If the mean of 5 numbers is 18 and one number 26 is replaced by 16, the new mean is:','14','16','18','20','B','The total falls by 10, so the new total is 90−10=80 and the mean is 16.','Statistics'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=7);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,8,'Which word is correctly spelled?','Accomodation','Acommodation','Accommodation','Accommadation','C','The correct spelling is accommodation: double c and double m.','English'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=8);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,9,'The functional unit of the kidney is the:','Neuron','Nephron','Alveolus','Villus','B','The nephron is the structural and functional unit of the kidney.','Biology'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=9);

INSERT INTO mock_questions (test_id,question_no,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,topic)
SELECT id,10,'A train moving at 72 km/h passes a pole in 15 seconds. Its length is:','240 m','270 m','300 m','320 m','C','72 km/h = 20 m/s. Distance in 15 s = 20×15=300 m.','Time and Distance'
FROM mock_tests WHERE title='NDA Battle Mock — Extreme Mixed 1' AND NOT EXISTS (SELECT 1 FROM mock_questions q WHERE q.test_id=mock_tests.id AND q.question_no=10);