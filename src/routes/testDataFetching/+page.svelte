<script lang="ts">
  export let data

  let foo = data.supabase.channel('foo').on('postgres_changes', { event: '*', schema: 'public', table: 'PointingSession' }, payload => {
        console.log('Session changed:', payload);
        loadedData = payload;
      })
    .subscribe();
  let loadedData = []
  async function loadData() {
    const { data: result } = await data.supabase.from('PointingSession').select('*').limit(20)
    loadedData = result
    logThing();
  }

  function logThing() {
    console.log(foo);
    console.log(data);
  }


  $: if (data.session) {
    loadData()
  }
</script>

{#if data.session}
<p>client-side data fetching with RLS</p>
<pre>{JSON.stringify(loadedData, null, 2)}</pre>
{/if}

<button on:click={() => logThing()} >Log stuff </button>