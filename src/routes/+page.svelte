<script>
    // @ts-nocheck

    /**
     * Welcome to pointsnothours!
     * Made by Patrick aka Pachwenko
     * https://github.com/Pachwenko
     */

    import { useReceivedMessages, otherPlayers } from '$lib/store.js';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    export let data
    let { supabase } = data
    $: ({ supabase } = data)
    let activeSessions = undefined;
    let currentUserProfile = undefined;

    async function startPointingSession() {
        const {data2, error} = await supabase.from('PointingSession').insert({
            last_updated: new Date().toISOString(),
            player_data: {},
            users: data?.session.user.id
        });
        console.log('started new session', data2, error);
    }


	onMount(async () => {
        if (!data.session) {
            goto('/auth');
        }
        // should only ever return one (the current user's profile)
        const { data: result } = await supabase.from('PointingSession').select('*').limit(10);
        if (result && result.length > 0) {
            activeSessions = result;
        }
        const { data2: result2 } = await supabase.from('profiles').select('*').limit(1);
        if (result2 && result2.length > 0) {
            currentUserProfile = result2[0];
        } else {
            currentUserProfile = { display_name: 'default' }
        }
	});


</script>


{#if data.session}
<!-- Your updated template with increased border size and full-screen layout -->
<div class="container bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center">
    <h1>Welcome to spring Pointing!</h1>

    {#if currentUserProfile}
        <p>Current display name: {currentUserProfile.display_name}</p>
    {:else}
        <p>Current display name: loading...</p>
    {/if}
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={startPointingSession}>
        Start new Pointing Session
    </button>

    {#if activeSessions}
        <div>
            Previous Sessions:
            <ul>
                {#each activeSessions as session}
                <li><a href="/points/{session.id}/">{session.id} - {session.last_updated}</a></li>
                {/each}
            </ul>
        </div>
    {/if}

    <!-- {#if username}
      <div>
        Message: <input class="bg-gray-800 text-white p-3 border-2 border-blue-500 rounded mb-4" bind:value={message} placeholder="Enter your message" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={handleClick}>
          Click to send your message!
        </button>
      </div>
    {/if}
    {$useReceivedMessages} -->

    <ul class="mt-4 w-full max-w-md">
      {#each $useReceivedMessages as msg}
        <li class="bg-gray-800 p-3 border-2 border-blue-500 rounded mb-2">{msg}</li>
      {/each}
    </ul>

</div>
{/if}
