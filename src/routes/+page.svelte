<script>
    // @ts-nocheck

    /**
     * Welcome to pointsnothours!
     * Made by Patrick aka Pachwenko
     * https://github.com/Pachwenko
     */
    import { createClient } from '@supabase/supabase-js';
    const eventTypes = {
        PLAYER_JOINED: 'PLAYER_JOINED',
        PLAYER_LEFT: 'PLAYER_LEFT',  // TODO: implenent this, trigger on a browser event?
        VOTED: 'VOTED',
        CLEAR_COTES: 'CLEAR_VOTES'
    }


    const SUPABASE_URL = 'https://otnrjsuiprjpbjvwsyrv.supabase.co'
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bnJqc3VpcHJqcGJqdndzeXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTkzODcsImV4cCI6MjAxODE3NTM4N30.RZp9Y6FAhq9M2QK7AAq0eLsq-9QZ0kUZIKfS0Q8M-MM'

    const client = createClient(SUPABASE_URL, SUPABASE_KEY);
    const channelA = client.channel('room-1');


    function playerJoined(payload) {
        console.log('player joines', payload);
    }
    function playerLeft(payload) {
        console.log('player left', payload);
    }
    function playerVoted(payload) {
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

    // channelA.send({
    //     type: 'broadcast',
    //     event: eventTypes.PLAYER_JOINED,
    //     payload: {
    //         'name': 'testplayer'  // TODO: Capture this in an input when first joining (loading)
    //     }
    // })

    function handleClick() {
        if (username && message) {
            console.log('Sending your message', message);
            channelA.send({
                type: 'broadcast',
                event: 'test',
                payload: { message: `Message from ${username} says: ${message}` },
            })
        }
    }

    let username = '';
    let message = '';
</script>

Username: <input bind:value={username} placeholder="enter your Username"/>

{#if username}
    Message: <input bind:value={message} placeholder="enter your message"/>
    <button on:click={handleClick}>
        Click to send your message!
    </button>
{/if}
