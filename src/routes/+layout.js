import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

// To utilize Supabase in shared load functions and within pages,
// it is essential to create a Supabase client in the root layout load.
export const load = async ({ fetch, data, depends }) => {
	// The usage of depends tells sveltekit that this load function should be executed whenever invalidate
	// is called to keep the page store in sync.
	depends('supabase:auth');

	// createSupabaseLoadClient caches the client when running in a browser environment and therefore does not create a new client for every time the load function runs.
	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};

export const prerender = 'auto';
