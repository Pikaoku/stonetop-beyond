import { page } from '$app/stores';
import type { Character } from '$lib/helpers/character';
import { derived } from 'svelte/store';

export const character = derived(page, ($page) => {
	return $page?.data?.character as Character;
});
