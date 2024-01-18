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
	 *              currentVote: 0, *          }
	 *      },
	 * }
	 */

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { currentPointingSession, currentUserProfile } from '$lib/store.js';
	import Button from '$lib/components/button.svelte';
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
		// if (session.new.last_updated > $currentPointingSession.last_updated) {
		console.debug('syncPointingSession', session);
		currentPointingSession.set(session.new); // can access old state with "old"
		// }
	}

	async function vote(number) {
		// console.log(`Voted ${number}`, session.user.id);
		currentVote = number;
		$currentPointingSession.game_state.activePlayers[session.user.id].currentVote = currentVote;
		$currentPointingSession.game_state.activePlayers[session.user.id].displayName =
			$currentUserProfile.display_name;
		$currentPointingSession.game_state.last_updated = currentTimestamp();
		await syncGameState();
	}

	async function clearVotes() {
		// wipe out all votes in the game state and sync the game state
		currentVote = '';
		Object.entries($currentPointingSession.game_state.activePlayers).forEach(([_id, player]) => {
			player.currentVote = '';
			return player;
		});
		await syncGameState();
	}

	async function syncGameState() {
		await supabase
			.from('PointingSession')
			.update({
				game_state: $currentPointingSession.game_state,
				last_updated: $currentPointingSession.last_updated
			})
			.eq('id', $currentPointingSession.id)
			.select()
			.single()
			.then((updatedSession) => {
				if (updatedSession.data) {
					currentPointingSession.set(updatedSession.data);
					console.log('synced game state', updatedSession);
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
				console.log('Got the pointing session', pointingSession);
				if (pointingSession.data) {
					// subscribe to changes in realtime!
					realtimeChannel = supabase
						.channel(`${data.slug}`) // new channel for each user based on session id
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

					if (Object.hasOwn(pointingSession.data.game_state.activePlayers, session.user.id)) {
						console.log('syncing display name');
						pointingSession.data.game_state.activePlayers[session.user.id] = {
							...pointingSession.data.game_state.activePlayers[session.user.id],
							displayName: $currentUserProfile.display_name // sync display name (incase user changed it!)
						};
					} else {
						pointingSession.data.game_state.activePlayers[session.user.id] = {
							currentVote: '',
							id: session.user.id,
							displayName: $currentUserProfile.display_name
						};
					}
					currentPointingSession.set(pointingSession.data);
					syncGameState();
				} else {
					// TODO: we should display a message saying the session was not found and to
					// go back home or start a new session (refactor creation to util function)
					goto('/');
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
		if (!session) {
			console.log('not loggin in, session:', session);
			goto(`/auth?next=${location}`);
		}
	});
</script>

<div class="text-yellow-100 p-8 h-full flex flex-col justify-center items-center">
	{#if $currentPointingSession && session}
		<div class="grid grid-cols-3">
			<div>
				<h1 class="text-3xl font-bold p-3">
					<h1>
						<h3 class="font-bold text-2xl mb-2">Player Votes</h3>
						<ol>
							{#each activePlayers as player}
								{#if player.id === session.user.id}
									<li class="text-lg font-bold text-lime-300" data-test-id="user-{player.id}">
										{player.displayName}: {player.currentVote}
									</li>
								{:else}
									<li class="text-lg" data-test-id="user-{player.id}">
										{player.displayName}: {player.currentVote}
									</li>
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
							<Button
								aria-current={_numberSelection === selection}
								aria-label={selection}
								selected={selection === _numberSelection}
								on:click={() => (_numberSelection = selection)}>{selection}</Button
							>
						</li>
					{/each}
				</ul>
				{#each possibleNumbers as number}
					<Button
						aria-current={currentVote === number}
						aria-label={number}
						selected={currentVote === number}
						on:click={() => vote(number)}>{number}</Button
					>
				{/each}
			</div>
			<div>
				<Button on:click={() => clearVotes()}>Clear Votes</Button>
			</div>
		</div>
	{/if}
</div>

<!--
Ideas for the future:
- When all votes match, show a nice animation!
- When clearing votes, show an erasing animation!
- Different stats like mean, avg, mode, etc.
-
-
-->
