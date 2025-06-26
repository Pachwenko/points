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
	import { writable } from 'svelte/store';

	import { currentPointingSession, currentUserProfile, currentUserSessions } from '$lib/store.js';
	import Button from '$lib/components/button.svelte';
	import EmojiPicker from '$lib/components/EmojiPicker.svelte';
	import ModalOverlay from '$lib/components/ModalOverlay.svelte';
	import PlayerList from '$lib/components/PlayerList.svelte';
	import EmojiThrower from '$lib/components/EmojiThrower.svelte';
	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let realtimeChannel;

	let possibleNumbers = [];
	const numberSelections = ['Fibonacci', 'T-Shirt Sizes'];
	let currentVote;

	let selectedUserId = null;
	let thrownEmojis = {}; // { userId: emoji }
	const emojiOptions = ['🍅', '😂', '🎉', '🔥', '👏', '😱', '🥳', '💩'];

	// For flying emoji animation
	let flyingEmojis = [];

	// Map of playerId to DOM element
	let playerRefs = {};

	// === Emoji Animation Config ===
	const EMOJI_FLY_X_OFFSET = 0.3; // fraction of screen width (e.g. 0.25 = 25%)
	const EMOJI_FLY_Y_RANGE = 0.25; // fraction of screen height for random Y offset (e.g. 0.25 = ±1/8)
	const EMOJI_FLY_DURATION = 0.9; // seconds
	const EMOJI_LAND_OFFSET_Y = -8; // pixels above the center of the display name
	// =============================

	let showEmojiPicker = false;
	let selectedEmoji = emojiOptions[0];

	// Ensure game_state is always initialized
	$: if ($currentPointingSession && !$currentPointingSession.game_state) {
		$currentPointingSession.game_state = {};
	}

	// Ensure pointingSystem is initialized in game state
	$: if ($currentPointingSession?.game_state && !$currentPointingSession.game_state.pointingSystem) {
		$currentPointingSession.game_state.pointingSystem = numberSelections[0];
		syncGameState();
	}

	function setPointingSystem(system) {
		if (!$currentPointingSession?.game_state) return;
		$currentPointingSession.game_state.pointingSystem = system;
		$currentPointingSession.game_state.last_updated = currentTimestamp();
		syncGameState();
	}

	$: if ($currentPointingSession?.game_state?.pointingSystem) {
		const numbersData = {
			Fibonacci: {
				name: 'Fibonacci',
				numbers: [1, 2, 3, 5, 8]
			},
			'T-Shirt Sizes': {
				name: 'T-Shirt Sizes',
				numbers: ['XS', 'S', 'M', 'L', 'XL']
			}
		};
		possibleNumbers = numbersData[$currentPointingSession.game_state.pointingSystem]?.numbers || [];
	}

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
		$currentPointingSession.game_state.votesRevealed = false;
		await syncGameState();
	}

	async function showVotes() {
		$currentPointingSession.game_state.votesRevealed = true;
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
					// Broadcast to all clients to refresh session
					if (realtimeChannel) {
						realtimeChannel.send({
							type: 'broadcast',
							event: 'refresh-session',
							payload: { from: session.user.id, timestamp: Date.now() }
						});
					}
				}
				if (updatedSession.error) {
					console.error('error updating game state', updatedSession.error);
				}
			});
	}

	async function joinSessionWithRetry() {
		let success = false;
		let tries = 0;
		while (!success && tries < 5) {
			tries++;
			const { data: latestSession, error: fetchError } = await supabase
				.from('PointingSession')
				.select('*')
				.eq('id', data.slug)
				.single();

			if (!latestSession || fetchError) return;

			const mergedPlayers = { ...(latestSession.game_state?.activePlayers || {}) };
			mergedPlayers[session.user.id] = {
				currentVote: '',
				id: session.user.id,
				displayName: $currentUserProfile.display_name
			};

			// Merge users array
			let mergedUsers = Array.isArray(latestSession.users) ? [...latestSession.users] : [];
			if (!mergedUsers.includes(session.user.id)) {
				mergedUsers.push(session.user.id);
			}

			const newLastUpdated = new Date().toISOString();

			const { error: updateError, data: updatedSession } = await supabase
				.from('PointingSession')
				.update({
					game_state: {
						...latestSession.game_state,
						activePlayers: mergedPlayers
					},
					users: mergedUsers,
					last_updated: newLastUpdated
				})
				.eq('id', data.slug)
				.eq('last_updated', latestSession.last_updated)
				.select()
				.single();

			if (!updateError) {
				success = true;
				currentPointingSession.set({
					...latestSession,
					game_state: {
						...latestSession.game_state,
						activePlayers: mergedPlayers
					},
					users: mergedUsers,
					last_updated: newLastUpdated
				});
				if (realtimeChannel) {
					realtimeChannel.send({
						type: 'broadcast',
						event: 'refresh-session',
						payload: { from: session.user.id, timestamp: Date.now() }
					});
				}
			} else {
				await new Promise(res => setTimeout(res, 100 * tries));
			}
		}
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
		await joinSessionWithRetry();
		// subscribe to changes in realtime!
		const { data: pointingSession } = await supabase
			.from('PointingSession')
			.select('*')
			.eq('id', data.slug)
			.single();
		if (pointingSession) {
			realtimeChannel = supabase
				.channel(`${data.slug}`)
				.on(
					'postgres_changes',
					{
						event: 'UPDATE',
						schema: 'public',
						table: 'PointingSession',
						filter: `id=eq.${pointingSession.id}`
					},
					(payload) => syncPointingSession(payload)
				)
				.subscribe();
		}
	}

	$: if (session) {
		loadData();
	}

	let activePlayers = [];

	$: if ($currentPointingSession && $currentPointingSession?.game_state?.activePlayers) {
		activePlayers = Object.values($currentPointingSession.game_state.activePlayers);
	}

	function selectUser(userId) {
		selectedUserId = userId;
	}

	function throwEmoji(emoji, targetUserId = null) {
		const toUserId = targetUserId || selectedUserId;
		if (toUserId) {
			// Broadcast the emoji throw to all clients
			if (realtimeChannel) {
				realtimeChannel.send({
					type: 'broadcast',
					event: 'emoji-throw',
					payload: {
						from: session.user.id,
						to: toUserId,
						emoji,
						timestamp: Date.now()
					}
				});
			}
			// Also trigger locally for instant feedback
			triggerEmojiThrow({ from: session.user.id, to: toUserId, emoji });
			selectedUserId = null;
		}
	}

	function triggerEmojiThrow({ from, to, emoji }) {
		const targetEl = playerRefs[to];
		if (!targetEl) return;
		const targetRect = targetEl.getBoundingClientRect();
		const endX = targetRect.left + targetRect.width / 2;
		const endY = targetRect.top + targetRect.height / 2 + EMOJI_LAND_OFFSET_Y;

		const screenW = window.innerWidth;
		const screenH = window.innerHeight;
		const xStart = endX + screenW * EMOJI_FLY_X_OFFSET;
		const yOffset = (Math.random() - 0.5) * (screenH * EMOJI_FLY_Y_RANGE);
		const yStart = screenH / 2 + yOffset;

		const id = Math.random().toString(36).slice(2);
		flyingEmojis = [
			...flyingEmojis,
			{
				emoji,
				userId: to,
				id,
				xStart,
				yStart,
				endX,
				endY,
				flying: true,
				bouncing: false
			}
		];

		setTimeout(() => {
			flyingEmojis = flyingEmojis.map((e) => (e.id === id ? { ...e, flying: false } : e));
		}, 10);

		// After fly-in, trigger bounce
		setTimeout(() => {
			flyingEmojis = flyingEmojis.map((e) => (e.id === id ? { ...e, bouncing: true } : e));
			// Show the emoji next to the name after animation
			thrownEmojis = { ...thrownEmojis, [to]: emoji };
			setTimeout(() => {
				thrownEmojis = { ...thrownEmojis, [to]: null };
			}, 2000);
		}, EMOJI_FLY_DURATION * 1000);

		// Remove flying emoji after bounce
		setTimeout(
			() => {
				flyingEmojis = flyingEmojis.filter((e) => e.id !== id);
			},
			(EMOJI_FLY_DURATION + 0.6) * 1000
		);
	}

	// Listen for emoji throws from other users
	$: if (realtimeChannel) {
		realtimeChannel.on('broadcast', { event: 'emoji-throw' }, (payload) => {
			if (payload?.payload) {
				triggerEmojiThrow(payload.payload);
			}
		});
		realtimeChannel.on('broadcast', { event: 'refresh-session' }, async (payload) => {
			// Reload the latest session from the DB
			const { data: latestSession } = await supabase
				.from('PointingSession')
				.select('*')
				.eq('id', data.slug)
				.single();
			if (latestSession) {
				currentPointingSession.set(latestSession);
			}
		});
	}

	function openEmojiPicker() {
		showEmojiPicker = true;
	}
	function closeEmojiPicker() {
		showEmojiPicker = false;
	}
	function pickEmoji(emoji) {
		selectedEmoji = emoji;
		closeEmojiPicker();
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

	$: {
		for (const player of activePlayers) {
			if (!playerRefs[player.id]) playerRefs[player.id] = null;
		}
	}
</script>

{#if data.session}
	<div class="p-8 min-h-full flex flex-col flex-grow justify-center items-center">
		<div class="container mx-auto p-2 text-center">
			{#if $currentUserProfile}
				<!-- <div>
					Display name: <p class="text-aqua font-bold">{$currentUserProfile.display_name}</p>
				</div> -->
			{:else}
				<div>Display name: loading...</div>
			{/if}

			<div class="grid grid-cols-3">
				<div class="flex flex-col items-start gap-2">
					<h3 class="font-bold text-2xl mb-2">Player Votes</h3>
					<PlayerList
						players={activePlayers}
						sessionUserId={data.session.user.id}
						thrownEmojis={thrownEmojis}
						selectedEmoji={selectedEmoji}
						playerRefs={playerRefs}
						on:throw={(e) => throwEmoji(e.detail.emoji, e.detail.playerId)}
						votesRevealed={$currentPointingSession?.game_state?.votesRevealed}
					/>
				</div>
				<div>
					{#if $currentPointingSession?.game_state}
						Select your pointing system:
						<select
							value={$currentPointingSession.game_state.pointingSystem}
							on:change={(e) => setPointingSystem(e.target.value)}
							class="mb-4 px-4 py-2 rounded border-4 border-[#fe8019] bg-[#282828] text-[#ebdbb2] font-bold focus:outline-none focus:ring-2 focus:ring-[#fe8019] transition-all duration-150"
						>
							{#each numberSelections as selection}
								<option value={selection}>{selection}</option>
							{/each}
						</select>
						<div class="flex gap-3 mt-2">
							{#each possibleNumbers as number}
								<Button
									aria-current={currentVote === number}
									aria-label={number}
									selected={currentVote === number}
									on:click={() => vote(number)}
									variant="number"
								>{number}</Button>
							{/each}
						</div>
					{/if}
				</div>
				<div class="flex flex-col gap-2 items-stretch ml-8">
					<Button on:click={() => clearVotes()} variant="default">Clear Votes</Button>
					<Button on:click={() => showVotes()} variant="default">Show Votes</Button>
				</div>
			</div>

			<div class="mt-4 flex flex-col items-center">
				<Button
					on:click={openEmojiPicker}
					class="px-4 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
				>
					Pick Emoji
					<span class="ml-2 text-2xl">{selectedEmoji}</span>
				</Button>
			</div>
			<EmojiPicker
				show={showEmojiPicker}
				emojiOptions={emojiOptions}
				selectedEmoji={selectedEmoji}
				on:close={closeEmojiPicker}
				on:pick={(e) => pickEmoji(e.detail)}
			/>
		</div>
	</div>
{/if}

<EmojiThrower {flyingEmojis} />

{#each flyingEmojis as fly (fly.id)}
	{#if fly.bouncing}
		<span style="position:fixed;left:{fly.endX}px;top:{fly.endY}px;z-index:100;">
			<span class="fly-emoji select-none emoji-bounce" style="font-size:2.5rem;">
				{fly.emoji}
			</span>
		</span>
	{:else}
		<span
			class="fly-emoji select-none {fly.flying ? 'flying' : ''}"
			style="
				left: 0; top: 0;
				transform: translate({fly.flying ? fly.xStart : fly.endX}px, {fly.flying
				? fly.yStart
				: fly.endY}px) {fly.flying ? 'scale(1.5) rotate(-20deg)' : 'scale(1) rotate(0deg)'};
				opacity: {fly.flying ? 0.8 : 1};
				--fly-duration: {EMOJI_FLY_DURATION}s;
			"
		>
			{fly.emoji}
		</span>
	{/if}
{/each}

<!--
Ideas for the future:
- When all votes match, show a nice animation!
- When clearing votes, show an erasing animation!
- Different stats like mean, avg, mode, etc.
-
-
-->

<style>
	.fly-emoji {
		position: fixed;
		z-index: 100;
		font-size: 2.5rem;
		pointer-events: none;
		transition:
			transform var(--fly-duration, 0.9s) cubic-bezier(0.6, 1.5, 0.6, 1),
			opacity var(--fly-duration, 0.9s);
		will-change: transform, opacity;
	}
	.fly-emoji.flying {
		transform: scale(1.5) rotate(-20deg);
		opacity: 0.8;
	}
	.emoji-bounce {
		animation: emoji-bounce-off 0.5s cubic-bezier(0.5, 1.8, 0.5, 1) forwards;
	}
	@keyframes emoji-bounce-off {
		0% {
			transform: scale(1) rotate(0deg);
			opacity: 1;
		}
		20% {
			transform: scale(1.2, 0.8) rotate(-10deg);
		}
		40% {
			transform: scale(0.8, 1.2) rotate(10deg);
		}
		60% {
			transform: translateY(-30px) scale(1.1) rotate(-8deg);
		}
		80% {
			transform: translateY(-10px) scale(1) rotate(0deg);
		}
		100% {
			transform: translateY(-60px) scale(0.8) rotate(0deg);
			opacity: 0;
		}
	}
</style>
