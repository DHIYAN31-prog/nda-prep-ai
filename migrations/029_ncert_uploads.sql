CREATE TABLE IF NOT EXISTS ncert_uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL DEFAULT current_setting('hatchable.user_id', true),
  class_name text NOT NULL,
  subject text NOT NULL,
  filename text NOT NULL,
  storage_key text NOT NULL,
  content_type text NOT NULL,
  size_bytes integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
)