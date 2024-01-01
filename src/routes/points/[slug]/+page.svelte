<script>
	// @ts-nocheck

	/**
	 * Gamestate outline
	 * {
	 *      version: 1,  // incase we need to do any migration stuff later
	 *      activePlayers: {
	 *          'abc-1234-xyz': {
	 *              id: 'abc-1234-xyz',
	 *              displayName: 'test-user-1',
	 *              currentVote: 0,
	 *          }
	 *      },
	 * }
	 */

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { currentPointingSession, currentUserProfile } from '$lib/store.js';
	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let realtimeChannel;

	let possibleNumbers = [];
	const numberSelections = ['Fibonacci'];
	let _numberSelection = numberSelections[0];
	let currentVote;

	function currentTimestamp() {
		return new Date().toISOString();
	}

	async function syncPointingSession(session) {
		// when debugging, check network log for the websocket!
		// called for realtime updateds to our pointing session
		console.debug('rtu session', session);
		currentPointingSession.set(session.new); // can access old state with "old"
	}

	async function vote(number) {
		console.log(`Voted ${number}`, session.user.id);
		// TODO: also post other game state data here,
		// like last_updated should be current time
		$currentPointingSession.game_state.activePlayers[session.user.id].currentVote = number;
		$currentPointingSession.game_state.last_updated = currentTimestamp();

		await syncGameState();
	}

	async function clearVotes() {
		// wipe out all votes in the game state and sync the game state
	}

	async function syncGameState() {
		console.log('syncing game state', $currentPointingSession);
		await supabase
			.from('PointingSession')
			.update({
				users: $currentPointingSession.users,
				game_state: $currentPointingSession.game_state,
				last_updated: currentTimestamp()
			})
			.eq('id', $currentPointingSession.id)
			.select()
			.single()
			.then((updatedSession) => {
				if (updatedSession.data) {
					currentPointingSession.set(updatedSession.data);
					console.log('updated game state', updatedSession);
				}
				if (updatedSession.error) {
					console.error('error updating game state', updatedSession.error);
				}
			});
	}

	async function loadData() {
		await supabase
			.from('profiles')
			.select('*')
			.eq('id', session.user.id)
			.limit(1)
			.single()
			.then((profile) => {
				console.log('profile', profile);
				if (profile?.data) {
					currentUserProfile.set(profile.data);
				} else {
					currentUserProfile.set({ display_name: 'default', temporary: true });
				}
			});
		await supabase
			.from('PointingSession')
			.select('*')
			.eq('id', data.slug)
			.single()
			.then((pointingSession) => {
				//  TODO: handle scenario where invalid slug was given
				console.log('Got pointing session', pointingSession, currentPointingSession);
				if (pointingSession.data) {
					// subscribe!
					realtimeChannel = supabase
						.channel(`${data.slug}-${session.user.id}`) // new channel for each user based on session id
						.on(
							'postgres_changes',
							{
								event: 'UPDATE',
								schema: 'public',
								table: 'PointingSession',
								filter: `id=eq.${pointingSession.data.id}`
							},
							(payload) => syncPointingSession(payload)
						)
						.subscribe();
					console.log('subscribing to reatltime updates', pointingSession.data.id, realtimeChannel);

					// check if current user is tied to session, if not update the session to add user!
					console.log('adding player to session', session.user.id);
					pointingSession.data.game_state.activePlayers[session.user.id] = {
						id: session.user.id,
						displayName: $currentUserProfile.display_name,
						currentVote: ''
					};
					currentPointingSession.set(pointingSession.data);
					syncGameState();
				}
			});
	}

	$: if (session) {
		loadData();
	}

	let activePlayers = [];

	$: if ($currentPointingSession && $currentPointingSession?.game_state?.activePlayers) {
		activePlayers = Object.values($currentPointingSession.game_state.activePlayers);
	}

	$: if (_numberSelection) {
		// So we can add more options later and make it dynamic
		const numbersData = {
			Fibonacci: {
				name: 'Fibonacci',
				numbers: [1, 2, 3, 5, 8]
			}
		};
		possibleNumbers = numbersData[_numberSelection].numbers;
	}

	onMount(async () => {
		if (!data.slug) {
			goto('/');
		}
		console.log('sessions', session);
		if (!session) {
			goto(`/auth?next=${location}`);
		}
	});
</script>

<!-- Your updated template with increased border size and full-screen layout -->
<div class="bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center">
	{#if $currentPointingSession && session}
		<div class="grid grid-cols-3">
			<div>
				<h1 class="text-3xl font-bold p-3">
					<h1>
						<h3 class="font-bold text-2xl mb-2">Player Votes</h3>
						<ol>
							{#each activePlayers as player}
								{#if player.id === session.user.id}
									<li class="text-lg font-bold">{player.displayName}: {player.currentVote}</li>
								{:else}
									<li class="text-lg">{player.displayName}: {player.currentVote}</li>
								{/if}
							{/each}
						</ol>
					</h1>
				</h1>
			</div>
			<div>
				Select your pointing system:
				<ul>
					{#each numberSelections as selection}
						<li>
							<button
								class="border border-1 border-round bg-gray-700 hoder:bg-gray-600 m-1 p-2"
								aria-current={_numberSelection === selection}
								aria-label={selection}
								on:click={() => (_numberSelection = selection)}>{selection}</button
							>
						</li>
					{/each}
				</ul>
				{#each possibleNumbers as number}
					<button
						class="border border-1 m-1 p-1"
						aria-current={_numberSelection === number}
						aria-label={number}
						on:click={() => vote(number)}>{number}</button
					>
				{/each}
			</div>
			<div></div>
		</div>
	{/if}
</div>
