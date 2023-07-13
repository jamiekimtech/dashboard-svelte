import { writable } from 'svelte/store';

export const hamburgerOpen = writable(false);

export function toggleMenu() {
	hamburgerOpen.update((state) => !state);
}
