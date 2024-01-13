# [Svelte](https://svelte.dev/)

I'm using [svelte](https://svelte.dev/) here because it's really simple to use, for the most part it's just html and javascript.

This project uses Node version 20.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

You can preview the production build with `npm run preview`. You should do this before deploying to make sure everything looks right!

## Testing

This project uses [Cypress](https://cypress.io) for E2E testing. There currently are no component level tests, but they may be included in the future (may vitest?).

To open the cypress runner yourself do `npx cypress open` and to just run the tests `npm run test`

A helpful link to the assertions you can do: https://docs.cypress.io/guides/references/assertions

Doing our best to follow the Cypress best practices outlined here https://docs.cypress.io/guides/references/best-practices

# [Supabase](https://supabase.com/)

We make heavy use of [supabase](https://supabase.com/), for auth, db, realtime events, and more.

Client documentaton https://supabase.com/docs/reference/javascript/
Auth documentation https://supabase.com/docs/guides/auth/auth-helpers/sveltekit

#### Database

We use the Supabase REST API to interact with postgres. See table definitions below:

```sql
create table
  public."PointingSession" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    game_state jsonb null,
    last_updated timestamp without time zone null default now(),
    pointing_sessions bigint not null default '0'::bigint,
    users uuid[] null,
    constraint session_pkey primary key (id)
  ) tablespace pg_default;


create table
  public.profiles (
    id uuid not null,
    display_name text null,
    constraint profiles_pkey primary key (id),
    constraint profiles_id_fkey foreign key (id) references auth.users (id) on delete cascade
  ) tablespace pg_default;
```

These are the [RLS policies](https://supabase.com/docs/guides/auth/row-level-security) that allow us to query for data with pre-defined filter policies.

```sql
ALTER TABLE "public"."PointingSession" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users access to INSERT" ON "public"."PointingSession"
    AS PERMISSIVE FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users access to SELECT" ON "public"."PointingSession"
    AS PERMISSIVE FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users access to UPDATE" ON "public"."PointingSession"
    AS PERMISSIVE FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated can DELETE based on m2m" ON "public"."PointingSession"
    AS PERMISSIVE FOR DELETE
    TO authenticated
    USING (auth.uid() = ANY(users));

CREATE POLICY "Everyone can see everyones profile" ON "public"."profiles"
    AS PERMISSIVE FOR SELECT
    TO authenticated, anon
    USING ( true );

CREATE POLICY "Users can create their own profile" ON "public"."profiles"
    AS PERMISSIVE FOR INSERT
    WITH CHECK ( auth.uid() = id );

CREATE POLICY "Users can update their own profile" ON "public"."profiles"
    AS PERMISSIVE FOR UPDATE
    USING ( auth.uid() = id );
```

# [Tailwind](https://tailwindcss.com/)

Tailwind is pretty great https://tailwindcss.com/
