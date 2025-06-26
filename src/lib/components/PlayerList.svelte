<script lang="ts">
	export let players: any[] = [];
	export let sessionUserId: string = '';
	export let thrownEmojis: Record<string, string> = {};
	export let selectedEmoji: string = '';
	export let playerRefs: Record<string, HTMLElement | null> = {};
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleThrow(playerId: string) {
		dispatch('throw', { emoji: selectedEmoji, playerId });
	}
</script>
<ol>
	{#each players as player}
		{#if player && player.displayName}
			<li
				class="text-lg flex items-center gap-2 mb-1 {player.id === sessionUserId ? 'font-bold text-lime-300' : ''}"
				data-test-id={`user-${player.id}`}
			>
				<button
					bind:this={playerRefs[player.id]}
					on:click={() => handleThrow(player.id)}
					class="underline cursor-pointer text-orange-300 hover:text-orange-200 transition-colors px-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
					title={`Throw an emoji at ${player.displayName}!`}
					aria-label={`Throw an emoji at ${player.displayName}`}
					tabindex="0"
				>
					{player.displayName}
				</button>
				: <span class="text-aqua-200">{player.currentVote}</span>
				{#if thrownEmojis[player.id]}
					<span class="ml-2 animate-bounce text-2xl">{thrownEmojis[player.id]}</span>
				{/if}
			</li>
		{/if}
	{/each}
</ol>