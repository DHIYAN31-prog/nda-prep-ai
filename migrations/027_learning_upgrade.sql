CREATE TABLE IF NOT EXISTS bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  item_type text NOT NULL,
  item_key text NOT NULL,
  title text NOT NULL,
  payload text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id,item_type,item_key)
);
CREATE INDEX IF NOT EXISTS bookmarks_user_idx ON bookmarks(user_id);

CREATE TABLE IF NOT EXISTS mistakes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  question_key text NOT NULL,
  question_text text NOT NULL,
  student_answer text,
  correct_answer text,
  explanation text,
  topic text,
  created_at timestamptz NOT NULL DEFAULT now(),
  mastered_at timestamptz
);
CREATE INDEX IF NOT EXISTS mistakes_user_idx ON mistakes(user_id);

CREATE TABLE IF NOT EXISTS study_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL UNIQUE,
  exam_date date,
  study_hours numeric NOT NULL DEFAULT 1,
  target_score integer,
  weak_subjects text,
  strong_subjects text,
  plan_json text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS study_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  task_date date NOT NULL,
  title text NOT NULL,
  subject text,
  minutes integer NOT NULL DEFAULT 30,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS study_tasks_user_date_idx ON study_tasks(user_id,task_date);

CREATE TABLE IF NOT EXISTS vocabulary (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  word text NOT NULL UNIQUE,
  meaning text NOT NULL,
  synonym text,
  antonym text,
  example_sentence text,
  day_no integer NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS daily_challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_date date NOT NULL UNIQUE,
  questions_json text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  badge_key text NOT NULL,
  title text NOT NULL,
  unlocked_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id,badge_key)
);