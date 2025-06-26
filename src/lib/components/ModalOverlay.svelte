<script lang="ts">
	export let show: boolean = false;
	export let ariaLabel: string = 'Close overlay';
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}

	onMount(() => {
		if (show) window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>
{#if show}
	<button
		type="button"
		class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
		on:click={close}
		aria-label={ariaLabel}
		style="all:unset;position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);"
	></button>
{/if}