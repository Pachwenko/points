<script lang="ts">
	export let flyingEmojis: any[] = [];
</script>
{#each flyingEmojis as fly (fly.id)}
	{#if fly.bouncing}
		<span style="position:fixed;left:{fly.endX}px;top:{fly.endY}px;z-index:100;">
			<span
				class="fly-emoji select-none emoji-bounce"
				style="font-size:2.5rem;"
			>
				{fly.emoji}
			</span>
		</span>
	{:else}
		<span
			class="fly-emoji select-none {fly.flying ? 'flying' : ''}"
			style="
				left: 0; top: 0;
				transform: translate({fly.flying ? fly.xStart : fly.endX}px, {fly.flying ? fly.yStart : fly.endY}px) {fly.flying ? 'scale(1.5) rotate(-20deg)' : 'scale(1) rotate(0deg)'};
				opacity: {fly.flying ? 0.8 : 1};
				--fly-duration: 0.9s;
			"
		>
			{fly.emoji}
		</span>
	{/if}
{/each}
<style>
.fly-emoji {
	position: fixed;
	z-index: 100;
	font-size: 2.5rem;
	pointer-events: none;
	transition: transform var(--fly-duration, 0.9s) cubic-bezier(0.6,1.5,0.6,1), opacity var(--fly-duration, 0.9s);
	will-change: transform, opacity;
}
.fly-emoji.flying {
	transform: scale(1.5) rotate(-20deg);
	opacity: 0.8;
}
.emoji-bounce {
	animation: emoji-bounce-off 0.5s cubic-bezier(.5,1.8,.5,1) forwards;
}
@keyframes emoji-bounce-off {
	0%   { transform: scale(1) rotate(0deg); opacity: 1; }
	20%  { transform: scale(1.2, 0.8) rotate(-10deg); }
	40%  { transform: scale(0.8, 1.2) rotate(10deg); }
	60%  { transform: translateY(-30px) scale(1.1) rotate(-8deg);}
	80%  { transform: translateY(-10px) scale(1) rotate(0deg);}
	100% { transform: translateY(-60px) scale(0.8) rotate(0deg); opacity: 0; }
}
</style>