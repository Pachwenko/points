<script lang="ts">
	export let show: boolean = false;
	export let emojiOptions: string[] = [];
	export let selectedEmoji: string = '';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function pickEmoji(emoji: string) {
		dispatch('pick', emoji);
	}
	function close() {
		dispatch('close');
	}
</script>
{#if show}
	<button
		type="button"
		class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
		on:click={close}
		aria-label="Close emoji picker"
		style="all:unset;position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);"
	></button>
	<div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-900 border-4 border-yellow-700 rounded-xl shadow-2xl p-6 flex flex-col items-center min-w-[320px] max-w-[90vw] z-50" on:click|stopPropagation style="background-color: #282828;">
		<button class="absolute top-2 right-2 text-orange-300 hover:text-orange-100 text-2xl font-bold" on:click={close} title="Close" aria-label="Close">×</button>
		<span class="mb-2 text-orange-200 font-bold text-lg">Pick your emoji!</span>
		<div class="mb-2 text-orange-200">Pick from defaults:</div>
		<div class="grid grid-cols-8 gap-2 max-w-xs">
			{#each emojiOptions as emoji}
				<button
					type="button"
					on:click={() => pickEmoji(emoji)}
					class="text-2xl hover:scale-125 transition-transform duration-150 bg-yellow-800 hover:bg-yellow-700 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
					title={`Pick ${emoji}`}
					aria-label={`Pick ${emoji}`}
					tabindex="0"
				>
					{emoji}
				</button>
			{/each}
		</div>
	</div>
{/if}