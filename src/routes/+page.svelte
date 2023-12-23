<script>
    // @ts-nocheck

    /**
     * Welcome to pointsnothours!
     * Made by Patrick aka Pachwenko
     * https://github.com/Pachwenko
     */
    import { createClient } from '@supabase/supabase-js';

    import { useReceivedMessages, otherPlayers } from '$lib/store.js';
    // const receivedMessages2 = useReceivedMessages;
    import { v4 as uuidv4 } from 'uuid';
    // const channelID = uuidv4();
    const channelID = 'room1';
    const eventTypes = {
        PLAYER_JOINED: 'PLAYER_JOINED',
        PLAYER_LEFT: 'PLAYER_LEFT',  // TODO: implenent this, trigger on a browser event?
        VOTED: 'VOTED',
        CLEAR_COTES: 'CLEAR_VOTES'
    }


    const SUPABASE_URL = 'https://otnrjsuiprjpbjvwsyrv.supabase.co'
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bnJqc3VpcHJqcGJqdndzeXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTkzODcsImV4cCI6MjAxODE3NTM4N30.RZp9Y6FAhq9M2QK7AAq0eLsq-9QZ0kUZIKfS0Q8M-MM'

    const client = createClient(SUPABASE_URL, SUPABASE_KEY);
    const channelA = client.channel(channelID);

    let showPointingSession = false;
    let username = '';
    // let message = '';

    // callbacks to the realtime events
    function playerJoined(payload) {
        otherPlayers.update(players => [...players, payload.payload.name])
        console.log('player joined', payload);
    }
    function playerLeft(payload) {
        console.log('player left', payload);
    }
    function playerVoted(payload) {
        // TODO: handle adding player to list if not already there
        console.log('player voted', payload);
    }
    function clearVotes(payload) {
        console.log('clear votes', payload);
    }

    // Subscribe to the Channel
    channelA.subscribe();
    channelA
    .on(
        'broadcast',
        { event: eventTypes.PLAYER_JOINED },
        (payload) => playerJoined(payload)
    )
    channelA
    .on(
        'broadcast',
        { event: eventTypes.PLAYER_LEFT },
        (payload) => playerLeft(payload)
    )
    channelA
    .on(
        'broadcast',
        { event: eventTypes.VOTED },
        (payload) => playerVoted(payload)
    )
    channelA
    .on(
        'broadcast',
        { event: eventTypes.CLEAR_COTES },
        (payload) => clearVotes(payload)
    )

    // regular functions
    function joinPointingSession() {
        if (username) {
            showPointingSession = true;
            channelA.send({
                type: 'broadcast',
                event: eventTypes.PLAYER_JOINED,
                payload: {
                    name: username
                }
            })
        }
    }

</script>


<!-- Your updated template with increased border size and full-screen layout -->
<div class="bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center">
    Username: <input class="bg-gray-800 text-white p-3 border-2 border-blue-500 rounded mb-4" bind:value={username} placeholder="Enter your Username" />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={joinPointingSession}>
        Enter Pointing Session
    </button>

    {#if showPointingSession}
        <div>
            Players:
            <ul>
                <li>{username}</li>
                {#each $otherPlayers as player}
                <li>{player}</li>
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
