/*
  # Update likes table to support anonymous users

  1. Modified Tables
    - `likes` table:
      - Make `user_id` nullable to support unauthenticated users
      - Add `session_id` column for tracking anonymous likes

  2. Security
    - Update RLS policies to allow anonymous likes with session tracking
*/

ALTER TABLE likes DROP CONSTRAINT IF EXISTS likes_user_id_key;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'likes' AND column_name = 'session_id'
  ) THEN
    ALTER TABLE likes ADD COLUMN session_id text;
  END IF;
END $$;

ALTER TABLE likes ALTER COLUMN user_id DROP NOT NULL;

DROP POLICY IF EXISTS "Users can create their own like" ON likes;
DROP POLICY IF EXISTS "Users can delete their own like" ON likes;

CREATE POLICY "Anyone can create a like"
  ON likes FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can delete a like"
  ON likes FOR DELETE
  TO anon, authenticated
  USING (true);
