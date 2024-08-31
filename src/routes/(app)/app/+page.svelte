<script lang="ts">
	import type { PageData } from './$types';
	import RoughLink from '$lib/components/RoughLink.svelte';

	export let data: PageData;
	$: ({ characters, user, profile } = data);
</script>

<div class="flex flex-col w-full gap-4 h-full">
	<h3 class="text-xl">Your characters</h3>
	<ul>
		{#each characters as character (character.id)}
			<li><a href={`/app/characters/${character.id}`}> {character.name}</a></li>
		{:else}
			<li>No characters yet!</li>
		{/each}
	</ul>
	<RoughLink class="text-center mt-auto" href="/app/characters/create"
		>Create a new character</RoughLink
	>
</div>
