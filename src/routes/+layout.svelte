<script>
    import "../app.css";
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'

    export let data

    let { supabase, session } = data
    $: ({ supabase, session } = data)

    onMount(() => {
        // This layout is shared between all pages
        const {
        data: { subscription },
        } = supabase.auth.onAuthStateChange((event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
            // The usage of invalidate tells SvelteKit that the root +layout.ts load function should be
            // executed whenever the session updates to keep the page store in sync.
            invalidate('supabase:auth')
        }
        })

        return () => subscription.unsubscribe()
    });
</script>


<body class="flex flex-col h-screen">
  <header class="bg-gray-800 text-white p-4">
        <div class="flex justify-between items-center">
            <div>
                <a href="/" class="text-xl hover:text-gray-300">Home</a>
            </div>
            <div>
                {#if data.session}
                    <a href="/profile" class="text-xl hover:text-gray-300">Profile</a>
                {:else}
                    <a href="/auth" class="text-xl hover:text-gray-300">Sign In</a>
                {/if}
            </div>
        </div>
  </header>

  <main class="flex-grow bg-gray-800 w-full">
    <slot />
  </main>

  <footer class="bg-gray-800 text-white p-4 fixed bottom-0 inset-x-0">
        <div class="flex justify-center">
            <a target="_blank" href="https://github.com/Pachwenko/points" class="text-xl hover:text-gray-300">Source</a>
        </div>
  </footer>
</body>
