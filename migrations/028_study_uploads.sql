CREATE TABLE IF NOT EXISTS study_uploads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL DEFAULT current_setting('hatchable.user_id', true),
  filename TEXT NOT NULL,
  storage_key TEXT NOT NULL,
  content_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL DEFAULT 0,
  extracted_text TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
)