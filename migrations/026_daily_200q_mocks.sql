-- 026_daily_200q_mocks.sql
INSERT INTO mock_tests (title, subject, duration_minutes, total_questions, total_marks, difficulty, instructions)
SELECT
  'NDA Daily Mock — Day ' || LPAD(gs::text, 3, '0'),
  'Mixed NDA',
  180,
  200,
  650,
  'Hard',
  '200 original questions. 100 Mathematics + 30 English + 70 General Ability. No calculators. Negative marking is enabled in the review/scoring flow.'
FROM generate_series(1, 297) AS gs
WHERE NOT EXISTS (
  SELECT 1 FROM mock_tests m
  WHERE m.title = 'NDA Daily Mock — Day ' || LPAD(gs::text, 3, '0')
);