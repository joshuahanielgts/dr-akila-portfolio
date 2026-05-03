-- Create a table for contact form responses
create table if not exists contact_responses (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table contact_responses enable row level security;

-- Create a policy that allows anyone to insert (public submissions)
create policy "Enable insert for everyone" on contact_responses
  for insert with check (true);

-- Create a policy that allows only authenticated users to view responses (admin access)
create policy "Enable select for authenticated users only" on contact_responses
  for select using (auth.role() = 'authenticated');
