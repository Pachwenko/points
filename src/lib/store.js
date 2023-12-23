// store.js
import { writable } from 'svelte/store';

// Create a writable store with an empty array as the initial value
export const useReceivedMessages = writable([]);

export const otherPlayers = writable([]);