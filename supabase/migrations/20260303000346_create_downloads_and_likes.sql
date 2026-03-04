/*
  # Create downloads and likes tracking tables

  1. New Tables
    - `downloads` - Track downloads by users
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)
    - `likes` - Track likes on the project
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Users can view all likes count
    - Authenticated users can create and manage their own downloads/likes
*/

CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view download count"
  ON downloads FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can create their own download"
  ON downloads FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view like count"
  ON likes FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can create their own like"
  ON likes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own like"
  ON likes FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
