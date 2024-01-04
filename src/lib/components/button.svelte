<script>
    export let classes='bg-transparent border border-solid border-dim-orange hover:bg-dim-orange text-foreground font-bold m-2 py-2 px-4 rounded active:bg-orange ease-linear transition-all duration-150';
</script>

<button
    class="{classes}"
    on:click
    {...$$restProps}
>
    <slot />
</button>