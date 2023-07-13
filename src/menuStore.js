import { writable } from 'svelte/store';

export const hamburgerOpen = writable(true);

export function toggleMenu() {
	hamburgerOpen.update((state) => !state);
}
