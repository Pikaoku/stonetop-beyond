<script lang="ts">
	import StatSquare from './StatSquare.svelte';
	import RoughLink from '$lib/components/RoughLink.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import RoughButton from '$lib/components/RoughButton.svelte';
	import { getAttributeValue, getPoolValue } from '$lib/helpers/character';
	import AbilityScores from './AbilityScores.svelte';
	import type { Tables } from '$lib/types/db';
	import HpDisplay from './HpDisplay.svelte';
	import { character as charStore } from './stores';
	import Backpack from './Backpack.svelte';
	import XpButton from './XpButton.svelte';

	$: character = $charStore;
	$: classMoves = (
		character?.moves?.filter((move) => !!move && move.move?.type === 'class') ?? []
	).map((move) => move.move) as Tables<'move'>[];
</script>

{#if character}
	<div class="flex flex-col w-full gap-3 h-full p-2">
		<div class="flex flex-row justify-between">
			<h3 class="text-xl">{character.name}, {character.class?.name}</h3>
			<div>Lvl. {getPoolValue(character, 'level')}</div>
		</div>
		<div class="text-sm leading-tight flex flex-col gap-1 font-sans">
			<p class="italic text-white-off/80">{character.class?.description}</p>
			<p class=""><span class="font-semibold">Appearance</span> {character.appearance}</p>
			<p class=""><span class="font-semibold">Instinct</span> {character.instinct}</p>
		</div>
		<hr class="" />
		<AbilityScores {character} />
		<div class="grid grid-cols-3 gap-2">
			<HpDisplay {character} />
			<StatSquare value={getAttributeValue(character, 'armor')} label="armor" />
			<XpButton />
		</div>
		<hr />
		<div class="flex flex-row gap-4 my-2 text-center">
			<RoughLink href="/app/characters/{character.id}/basic-moves" class="flex-1"
				>Basic moves</RoughLink
			>
			<Backpack />
		</div>
		<h3 class="text-lg underline underline-offset-8">Class moves</h3>
		<div class="flex flex-col divide-y-2 divide-white-off/50 font-sans">
			{#each classMoves as move}
				<div class="flex flex-col gap-1 py-2">
					<div class="font-medium text-xl">{move.name}</div>
					<div class="markdown-container leading-tight">
						<SvelteMarkdown source={move.body} />
					</div>
				</div>
			{/each}
		</div>
		<RoughButton>Expedition moves</RoughButton>
		<RoughButton>Homefront moves</RoughButton>
		<RoughButton>Special moves</RoughButton>
		<div class="min-w-full py-8" />
	</div>
{:else}
	<div class="flex flex-col w-full gap-4 h-full">
		<h3 class="text-xl">Character not found</h3>
		<p>It seems that the character you're looking for doesn't exist.</p>
	</div>
{/if}
