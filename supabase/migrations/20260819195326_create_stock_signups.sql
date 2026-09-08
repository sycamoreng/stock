/*
# Create Sycamore Stock signups table

1. New Tables
   - `stock_signups`
     - `id` (uuid, primary key)
     - `full_name` (text, not null) — the person's name
     - `email` (text, not null) — contact email
     - `phone` (text, not null) — Nigerian phone number for account setup
     - `created_at` (timestamptz) — when they signed up

2. Security
   - Enable RLS on `stock_signups`.
   - Allow anyone (anon + authenticated) to INSERT a signup, since this is a
     public pre-launch lead form with no login.
   - No SELECT/UPDATE/DELETE policies are added, so submitted contact details
     cannot be read back through the public anon key — protecting lead privacy.
*/

CREATE TABLE IF NOT EXISTS stock_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE stock_signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_stock_signups" ON stock_signups;
CREATE POLICY "anon_insert_stock_signups" ON stock_signups FOR INSERT
  TO anon, authenticated WITH CHECK (true);
