<script>
    // @ts-nocheck

    /**
     * Welcome to pointsnothours!
     * Made by Patrick aka Pachwenko
     * https://github.com/Pachwenko
     */
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { currentUserProfile, currentUserSessions } from '$lib/store.js';

    export let data
    let { supabase } = data
    $: ({ supabase } = data)

    async function startPointingSession() {
        const userId = data.session.user.id; // syntax bug? refactor me
        supabase.from('PointingSession').insert({
            last_updated: new Date().toISOString(),
            game_state: {
                version: 1,
                activePlayers: {
                    userId: {
                        id: data.session.user.id,
                        displayName: $currentUserProfile.display_name,
                        currentVote: '',
                    },
                },
            },
            users: [data.session.user.id],
        }).select().single().then((newSession) => {
            console.log('started new session', newSession);
            if (newSession.data) {
                goto(`/points/${newSession.data.id}`);
            }
        });
    }

    async function loadData() {
        supabase.from('PointingSession').select().contains('users', [data.session?.user.id]).then((sessions) => {
        // supabase.from('PointingSession').select().then((sessions) => {
            currentUserSessions.set(sessions.data);
        });
        supabase.from('profiles').select('*').eq('id', data.session?.user.id).limit(1).single().then((profile) => {
            console.log('profile', profile);
            if (profile?.data) {
                currentUserProfile.set(profile.data);
            } else {
                currentUserProfile.set({display_name: 'default', temporary: true});
            }
        });
    }

    $: if (data.session) {
        loadData()
    }

	onMount(async () => {
        if (!data.session) {
            goto('/auth');
        }
	});


</script>


{#if data.session}
<div class="bg-gray-900 text-white p-8 min-h-full flex flex-col flex-grow justify-center items-center">
    <div class="container mx-auto border border-1 p-2">
        <h1 class="text-3xl font-bold">Welcome to Spring Pointing!</h1>

        {#if $currentUserProfile}
            <p>Current display name: {$currentUserProfile.display_name}</p>
        {:else}
            <p>Current display name: loading...</p>
        {/if}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={startPointingSession}>
            Start new Pointing Session
        </button>

        {#if $currentUserSessions}
            <div>
                Previous Sessions:
                <ul>
                    {#each $currentUserSessions as session}
                        <li>
                            <a href="/points/{session.id}/">
                                {session.id} - {session.last_updated}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</div>
{/if}
