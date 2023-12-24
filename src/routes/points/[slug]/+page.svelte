<script>
    import { onMount } from 'svelte'
    export let data;
    onMount(async () => {
        console.log('data', data);
	});
</script>


<!-- Your updated template with increased border size and full-screen layout -->
<div class="bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center">
    <h1>Pointing Session<h1>
</div>
