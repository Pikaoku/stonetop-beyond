<script lang="ts">
	import { page } from '$app/stores';
	import RoughLink from '$lib/components/RoughLink.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
	$: console.log('data.moves', data.moves);
</script>

{#if data.moves}
	<div class="p-4 flex flex-col gap-4">
		<RoughLink href="/app/characters/{$page.params.id}/">Back to character</RoughLink>
		<h1 class="font-display text-4xl">Basic Moves</h1>
		<div class="flex flex-col divide-y-2">
			{#each data.moves as move}
				<div class="py-4 markdown-container">
					<h2 class="font-display text-2xl">{move.name}</h2>
					<SvelteMarkdown source={move.body} />
				</div>
			{/each}
		</div>
	</div>
{/if}
