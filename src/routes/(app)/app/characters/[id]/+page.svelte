<script lang="ts">
	import type { Tables } from '../../../../../../database.types';
	import StatSquare from './StatSquare.svelte';
	import RoughLink from '$lib/components/RoughLink.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import RoughButton from '$lib/components/RoughButton.svelte';
	import StatPair from './StatPair.svelte';
	export let data;
	const character = data.character;

	let dazed = false;
	let weakened = false;
	let miserable = false;

	const setDebility = (debility: string) => {
		switch (debility) {
			case 'dazed':
				dazed = !dazed;
				break;
			case 'weakened':
				weakened = !weakened;
				break;
			case 'miserable':
				miserable = !miserable;
				break;
		}
	};

	const getAttributeValue = (atr: keyof Tables<'stat_line'>) => {
		try {
			return (character?.moves ?? []).reduce(
				(acc, move) => (!move.stats ? acc : acc + Number(move?.stats?.[atr])),
				0
			);
		} catch (e) {
			return 0;
		}
	};

	$: classMoves = (
		character?.moves?.filter((move) => !!move && move.move?.type === 'class') ?? []
	).map((move) => move.move) as Tables<'move'>[];
</script>

{#if character}
	<div class="flex flex-col w-full gap-3 h-full p-2">
		<div class="flex flex-row justify-between">
			<h3 class="text-xl">{character.name}</h3>
			<div>Lvl. 7</div>
		</div>
		<div>
			<p class="text-sm italic">eager youth, calm voice, hard body, polished gear</p>
			<p>character.description if i had one</p>
			<div class="leading-tight">
				<p>Instinct: Ambition, To increase your status or influence.</p>
			</div>
		</div>
		<hr class="" />
		<div class="grid grid-cols-3 gap-3 border-white-off">
			<StatPair
				topLabel="strength"
				topValue={getAttributeValue('strength')}
				bottomLabel="dexterity"
				bottomValue={getAttributeValue('dexterity')}
				debility="weakened"
				debilitated={weakened}
				on:click={() => setDebility('weakened')}
			/>
			<StatPair
				topLabel="intelligence"
				topValue={getAttributeValue('intelligence')}
				bottomLabel="wisdom"
				bottomValue={getAttributeValue('wisdom')}
				debility="dazed"
				debilitated={dazed}
				on:click={() => setDebility('dazed')}
			/>
			<StatPair
				topLabel="constitution"
				topValue={getAttributeValue('constitution')}
				bottomLabel="charisma"
				bottomValue={getAttributeValue('charisma')}
				debility="miserable"
				debilitated={miserable}
				on:click={() => setDebility('miserable')}
			/>
		</div>
		<div class="grid grid-cols-3 gap-2">
			<StatSquare value={0} label="hp" />
			<StatSquare value={0} label="armor" />
			<StatSquare value={0} label="xp" />
		</div>
		<hr />
		<div class="flex flex-row gap-4 my-2 text-center">
			<RoughLink href="/app/characters/{character.id}/basic-moves" class="btn btn-primary w-full"
				>Basic moves</RoughLink
			>
			<RoughLink href="/app/characters/{character.id}/edit" class="btn btn-primary w-full"
				>Manage pack</RoughLink
			>
		</div>
		<h3 class="text-lg underline underline-offset-8">Class moves</h3>
		<div class="flex flex-col divide-y-2 divide-white-off/50">
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
		<div class="min-w-full py-8" />
	</div>
{:else}
	<div class="flex flex-col w-full gap-4 h-full">
		<h3 class="text-xl">Character not found</h3>
		<p>It seems that the character you're looking for doesn't exist.</p>
	</div>
{/if}
