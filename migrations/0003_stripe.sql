create table if not exists stripe_customers(user_id text primary key, customer_id text not null unique);
create table if not exists stripe_catalog(tier integer primary key, price_id text not null, product_id text not null);
create table if not exists stripe_settings(key text primary key, value text not null);
create table if not exists stripe_memberships(
 id text primary key, user_id text not null, customer_id text, tier integer not null,
 status text not null, current_period_end timestamptz, cancel_at_period_end boolean not null default false,
 updated_at timestamptz not null default now()
);
create index if not exists stripe_memberships_user_idx on stripe_memberships(user_id);
create table if not exists stripe_orders(
 id serial primary key, user_id text not null, session_id text not null unique,
 product_slug text not null, product_name text not null, quantity integer not null,
 amount_cents integer not null, currency text not null default 'usd', shipping jsonb not null,
 status text not null default 'paid', fulfillment_status text not null default 'pending',
 printify_id text, error text, created_at timestamptz not null default now()
);
alter table stripe_orders add column if not exists fulfillment_started_at timestamptz;
