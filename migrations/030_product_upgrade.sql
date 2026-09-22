CREATE TABLE IF NOT EXISTS notification_preferences (
  user_id text PRIMARY KEY,
  new_videos boolean NOT NULL DEFAULT true,
  mock_tests boolean NOT NULL DEFAULT true,
  study_reminders boolean NOT NULL DEFAULT true,
  recommendations boolean NOT NULL DEFAULT true,
  current_affairs boolean NOT NULL DEFAULT true,
  quiet_start text NOT NULL DEFAULT '22:00',
  quiet_end text NOT NULL DEFAULT '06:00',
  updated_at timestamptz NOT NULL DEFAULT now()
)