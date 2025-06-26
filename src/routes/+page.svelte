<script>
	// @ts-nocheck

	/**
	 * Welcome to points!
	 * Made by Patrick aka Pachwenko
	 * https://github.com/Pachwenko
	 */
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { currentUserProfile, currentUserSessions } from '$lib/store.js';
	import Button from '$lib/components/button.svelte';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	async function startPointingSession() {
		const game_state = {
			version: 1,
			activePlayers: {}
		};
		supabase
			.from('PointingSession')
			.insert({
				last_updated: new Date().toISOString(),
				game_state: game_state,
				users: [data.session.user.id]
			})
			.select()
			.single()
			.then((newSession) => {
				console.log('started new session', newSession);
				if (newSession.data) {
					goto(`/points/${newSession.data.id}`);
				}
			});
	}

	async function ensureUserProfile() {
		const userId = data.session?.user.id;
		console.log('Session:', data.session);
		console.log('User ID:', userId);
		if (!userId) {
			console.error('No user ID found in session');
			return;
		}

		// Try to fetch the profile
		const { data: profile, error: fetchError } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', userId)
			.single();

		console.log('Profile fetch:', profile, fetchError);

		if (profile) {
			currentUserProfile.set(profile);
			return;
		}

		// If not found, try to insert
		const { data: newProfile, error: insertError } = await supabase
			.from('profiles')
			.insert([{ id: userId, display_name: 'default' }])
			.select()
			.single();

		console.log('Profile insert:', newProfile, insertError);

		if (newProfile) {
			currentUserProfile.set(newProfile);
		} else {
			console.error('Profile creation error:', insertError);
			currentUserProfile.set({ display_name: 'default', temporary: true, error: insertError?.message });
		}
	}

	async function loadData() {
		supabase
			.from('PointingSession')
			.select()
			.contains('users', [data.session?.user.id])
			.order('last_updated', { ascending: false })
			.then((sessions) => {
				currentUserSessions.set(sessions.data);
			});

		// Use the new ensureUserProfile function
		await ensureUserProfile();
	}

	$: if (data.session) {
		loadData();
	}

	onMount(async () => {
		if (!data.session) {
			goto('/auth');
		}
	});
</script>

{#if data.session}
	<div class="p-8 min-h-full flex flex-col flex-grow justify-center items-center">
		<div class="container mx-auto p-2 text-center">
			<h1 class="text-center text-3xl font-bold">Welcome to Pointing Poker</h1>
			{#if $currentUserProfile}
				<div>
					Display name: <p class="text-aqua font-bold">{$currentUserProfile.display_name}</p>
				</div>
			{:else}
				<div>Display name: loading...</div>
			{/if}

			<Button on:click={startPointingSession}>Start new Pointing Session</Button>

			{#if $currentUserSessions}
				<div class="w-full">
					<h4 class="text-2xl font-bold">Previous Sessions:</h4>
					<ul>
						<li class="grid grid-cols-2">
							<div>Session ID</div>
							<div>Last Used</div>
						</li>
						{#each $currentUserSessions as session}
							<li>
								<a
									class="grid grid-cols-2 border border-1 rounded m-1 p-1"
									href="/points/{session.id}/"
								>
									<div>
										{session.id}
									</div>
									<div>
										{session.last_updated}
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</div>
{/if}
