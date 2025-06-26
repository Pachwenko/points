<script lang="ts">
	function mergeClasses(defaults: string, custom: string): string {
		return [defaults, custom].filter(Boolean).join(' ');
	}

	export let classes = '';
	export let selected = false;
	export let variant: 'default' | 'number' = 'default';

	const defaultBase =
		'bg-[#3c3836] border-2 border-solid border-[#fe8019] hover:bg-[#504945] hover:text-[#fe8019] text-[#ebdbb2] font-bold py-2 px-5 rounded shadow-md active:bg-[#d65d0e] active:text-[#282828] transition-all duration-150';
	const defaultSelected =
		'border-2 border-solid border-[#fe8019] bg-[#fe8019] text-[#282828] font-bold py-2 px-5 rounded shadow-lg transition-all duration-150';
	const numberBase =
		'bg-[#282828] border-4 border-solid border-[#fe8019] hover:bg-[#fe8019] hover:text-[#282828] text-[#ebdbb2] font-bold py-2 px-5 rounded shadow-md active:bg-[#d65d0e] active:text-[#282828] transition-all duration-150';
	const numberSelected =
		'border-4 border-solid border-[#fe8019] bg-[#fe8019] text-[#282828] font-bold py-2 px-5 rounded shadow-lg transition-all duration-150';

	$: mergedClasses = mergeClasses(
		variant === 'number'
			? (selected ? numberSelected : numberBase)
			: (selected ? defaultSelected : defaultBase),
		classes
	);
</script>

<button class={mergedClasses} on:click {...$$restProps}>
	<slot />
</button>
