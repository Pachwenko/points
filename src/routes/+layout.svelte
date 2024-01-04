<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		// This layout is shared between all pages
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				// The usage of invalidate tells SvelteKit that the root +layout.ts load function should be
				// executed whenever the session updates to keep the page store in sync.
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<body class="flex flex-col h-screen bg-hard-background text-foreground">
	<header class="p-4 border border-zinc-700 border-bottom-2">
		<div class="flex justify-between items-center">
			<div>
				<a href="/" class="text-xl hover:text-amber-500">Home</a>
			</div>
			<div>
				{#if data.session}
					<a href="/profile" class="text-xl hover:text-amber-500">Profile</a>
				{:else}
					<a href="/auth" class="text-xl hover:text-amber-500">Sign In</a>
				{/if}
			</div>
		</div>
	</header>

	<main class="flex-grow w-full">
		<slot />
	</main>

	<footer class="p-4 fixed bottom-0 inset-x-0 border border-zinc-700 border-top-2">
		<div class="flex justify-center">
			<a
				target="_blank"
				href="https://github.com/Pachwenko/points"
				class="text-xl hover:text-amber-500">Source</a
			>
		</div>
	</footer>
</body>
