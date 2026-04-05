create table if not exists public.employees (
  id text primary key,
  username text unique not null,
  password text not null,
  name text not null,
  email text unique not null,
  role text not null check (role in ('employee', 'admin')),
  department text not null,
  designation text not null,
  assigned_works jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

insert into public.employees (
  id,
  username,
  password,
  name,
  email,
  role,
  department,
  designation,
  assigned_works
)
values
  (
    'emp-001',
    'veenaanand',
    'Test$123',
    'Veena Anand',
    'veena.anand@lotussoftwaresol.com',
    'employee',
    'Web Development',
    'Senior Frontend Developer',
    '[
      {"id":"task-v-1","title":"Build customer onboarding flow","status":"Completed","priority":"High","dueDate":"2026-04-08"},
      {"id":"task-v-2","title":"Fix responsive issues in services page","status":"In Progress","priority":"Medium","dueDate":"2026-04-10"},
      {"id":"task-v-3","title":"Update website typography tokens","status":"Not Started","priority":"Low","dueDate":"2026-04-12"}
    ]'::jsonb
  ),
  (
    'emp-002',
    'arpita',
    'Arpita@123',
    'Arpita',
    'arpita@lotussoftwaresol.com',
    'employee',
    'Mobile Development',
    'React Native Developer',
    '[
      {"id":"task-j-1","title":"Implement push notification module","status":"In Progress","priority":"High","dueDate":"2026-04-09"},
      {"id":"task-j-2","title":"Optimize Android app bundle size","status":"Completed","priority":"Medium","dueDate":"2026-04-07"},
      {"id":"task-j-3","title":"Prepare QA build for sprint demo","status":"Not Started","priority":"High","dueDate":"2026-04-11"}
    ]'::jsonb
  ),
  (
    'emp-003',
    'shreya',
    'Shreya@123',
    'Shreya',
    'shreya@lotussoftwaresol.com',
    'employee',
    'Backend Engineering',
    'Node.js Developer',
    '[
      {"id":"task-s-1","title":"Create API rate limiting middleware","status":"Completed","priority":"High","dueDate":"2026-04-06"},
      {"id":"task-s-2","title":"Add audit logs for login actions","status":"In Progress","priority":"Medium","dueDate":"2026-04-10"},
      {"id":"task-s-3","title":"Write API integration documentation","status":"Not Started","priority":"Low","dueDate":"2026-04-13"}
    ]'::jsonb
  ),
  (
    'admin-001',
    'adminlotus',
    'Admin@123',
    'Operations Admin',
    'admin@lotussoftwaresol.com',
    'admin',
    'Operations',
    'Project Admin',
    '[]'::jsonb
  )
on conflict (id) do update set
  username = excluded.username,
  password = excluded.password,
  name = excluded.name,
  email = excluded.email,
  role = excluded.role,
  department = excluded.department,
  designation = excluded.designation,
  assigned_works = excluded.assigned_works;

alter table public.employees enable row level security;

grant select on table public.employees to anon;

drop policy if exists employees_read_for_login on public.employees;
create policy employees_read_for_login
on public.employees
for select
to anon
using (true);

create table if not exists public.daily_work_entries (
  id uuid primary key default gen_random_uuid(),
  work_date date not null,
  s_no integer not null,
  client_category text not null,
  client_name text not null,
  location text not null,
  phone_number text not null default '',
  address text not null,
  call_status text not null default 'Not Called',
  demo_confirmed text not null default 'No' check (demo_confirmed in ('Yes', 'No')),
  demo_status text not null default 'Pending',
  order_status text not null default 'Pending',
  payment_received text not null default 'No' check (payment_received in ('Yes', 'No')),
  is_locked boolean not null default false,
  locked_by text,
  locked_at timestamptz,
  assigned_to text not null,
  comment_text text not null default '',
  created_by text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint daily_work_entries_assigned_to_fkey
    foreign key (assigned_to)
    references public.employees(username)
    on update cascade
    on delete restrict,
  constraint daily_work_entries_created_by_fkey
    foreign key (created_by)
    references public.employees(username)
    on update cascade
    on delete restrict
);

alter table public.daily_work_entries
  add column if not exists is_locked boolean not null default false,
  add column if not exists locked_by text,
  add column if not exists locked_at timestamptz,
  add column if not exists phone_number text not null default '',
  add column if not exists comment_text text not null default '';

drop index if exists daily_work_entries_unique_daily_sno;
create unique index if not exists daily_work_entries_unique_daily_employee_sno
  on public.daily_work_entries (work_date, assigned_to, s_no);

alter table public.daily_work_entries enable row level security;

grant select, insert, update, delete on table public.daily_work_entries to anon;

drop policy if exists daily_work_entries_read on public.daily_work_entries;
create policy daily_work_entries_read
on public.daily_work_entries
for select
to anon
using (true);

drop policy if exists daily_work_entries_insert on public.daily_work_entries;
create policy daily_work_entries_insert
on public.daily_work_entries
for insert
to anon
with check (true);

drop policy if exists daily_work_entries_update on public.daily_work_entries;
create policy daily_work_entries_update
on public.daily_work_entries
for update
to anon
using (true)
with check (true);

drop policy if exists daily_work_entries_delete on public.daily_work_entries;
create policy daily_work_entries_delete
on public.daily_work_entries
for delete
to anon
using (true);

create table if not exists public.employee_timesheets (
  id uuid primary key default gen_random_uuid(),
  work_date date not null,
  employee_username text not null,
  task_title text not null,
  hours_spent numeric(5,2) not null default 0,
  status text not null default 'Not Started' check (status in ('Not Started', 'In Progress', 'Completed')),
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint employee_timesheets_employee_username_fkey
    foreign key (employee_username)
    references public.employees(username)
    on update cascade
    on delete restrict
);

create index if not exists employee_timesheets_employee_date_idx
  on public.employee_timesheets (employee_username, work_date);

alter table public.employee_timesheets enable row level security;

grant select, insert, update, delete on table public.employee_timesheets to anon;

drop policy if exists employee_timesheets_read on public.employee_timesheets;
create policy employee_timesheets_read
on public.employee_timesheets
for select
to anon
using (true);

drop policy if exists employee_timesheets_insert on public.employee_timesheets;
create policy employee_timesheets_insert
on public.employee_timesheets
for insert
to anon
with check (true);

drop policy if exists employee_timesheets_update on public.employee_timesheets;
create policy employee_timesheets_update
on public.employee_timesheets
for update
to anon
using (true)
with check (true);

drop policy if exists employee_timesheets_delete on public.employee_timesheets;
create policy employee_timesheets_delete
on public.employee_timesheets
for delete
to anon
using (true);

notify pgrst, 'reload schema';
