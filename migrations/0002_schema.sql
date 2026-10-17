-- Application records and community board.
create table if not exists forum_categories (
  id serial primary key,
  slug text not null unique,
  name text not null,
  description text not null,
  sort_order integer not null default 0
);

create table if not exists forum_threads (
  id serial primary key,
  category_id integer not null references forum_categories(id),
  user_id text not null,
  author_name text not null,
  title text not null,
  body text not null,
  pinned boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists forum_replies (
  id serial primary key,
  thread_id integer not null references forum_threads(id),
  user_id text not null,
  author_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists health_logs (
  id serial primary key,
  user_id text not null,
  cat_name text not null default 'My cat',
  kind text not null,
  value text not null,
  note text,
  logged_at timestamptz not null default now()
);

create index if not exists health_logs_user_idx on health_logs (user_id, logged_at desc);
create index if not exists forum_threads_cat_idx on forum_threads (category_id, created_at desc);
create index if not exists forum_replies_thread_idx on forum_replies (thread_id, created_at);

insert into forum_categories (slug, name, description, sort_order)
values
  ('recovery-stories', 'Recovery stories', 'Share what helped after a scare — not a diagnosis, just companionship.', 1),
  ('home-care', 'Home care logistics', 'Carriers, clinics, after-hours pharmacies, feeding routines.', 2),
  ('senior-cats', 'Senior cats', 'Mobility, appetite, and the slow changes of later years.', 3),
  ('new-guardians', 'New guardians', 'First-year questions from people who just brought a cat home.', 4)
on conflict (slug) do nothing;

insert into forum_threads (category_id, user_id, author_name, title, body, pinned)
select c.id, 'seed', 'Board librarian',
  'How this board is used',
  'This is a peer board, not a clinic. Describe what you observed, what your veterinarian said, and what you are organizing at home. Do not ask the room to diagnose. Emergency signs — straining with no urine, open-mouth breathing, collapse, cold hind legs, toxin — belong at an emergency hospital, not in a thread.',
  true
from forum_categories c where c.slug = 'recovery-stories'
and not exists (select 1 from forum_threads where title = 'How this board is used');

