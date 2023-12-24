import { writable } from 'svelte/store';

// Create a writable store with an empty array as the initial value
export const currentUserSessions = writable([]);

export const currentPointingSession = writable({});

export const currentUserProfile = writable({});