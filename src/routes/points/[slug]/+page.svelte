<script>
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte'

    import { currentPointingSession, currentUserProfile } from '$lib/store.js';
    export let data;
    let { supabase } = data
    $: ({ supabase } = data)

    async function loadData() {
        supabase.from('PointingSession').select('*').eq('id', data.slug).single().then((session) => {
            console.log('Got pointing session', session);
            if (session.data) {
                currentPointingSession.set(session.data);
                //  TODO: handle scenario where invalid slug was given
                // TODO: check if current user is tied to session, if not update the session to add user!
            }
        });
        supabase.from('profiles').select('*').limit(1).single().then((profile) => {
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
        if (!data.slug) {
            goto('/');
        }
	});
</script>


<!-- Your updated template with increased border size and full-screen layout -->
<div class="bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center">
    {#if $currentPointingSession && $currentUserProfile}
        <div class="grid grid-cols-3">
            <div>
                <h1 class="text-3xl font-bold p-3">Pointing Session {data.slug}<h1>
                <h3 class="font-bold text-xl">Players</h3>
                <ol>
                    <li>{$currentUserProfile.display_name}</li>
                    {$currentPointingSession.users}
                </ol>
            </div>
            <div>
            <!-- voting stuff here -->

            </div>
            <div>


            </div>
        </div>
    {/if}
</div>
