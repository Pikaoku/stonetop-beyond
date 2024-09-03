<script lang="ts">
	import { supabase } from '$lib/helpers/contextuals';
	import { character } from '../stores';
	import { getPoolValue } from '$lib/helpers/character';
	import { ArrowRight } from 'lucide-svelte';
	import cx from 'classnames';

	const stats = [
		'strength',
		'dexterity',
		'consitution',
		'intelligence',
		'wisdom',
		'charisma'
	] as const;

	let selected: (typeof stats)[number] | number = 0;
</script>

<div class="font-sans text-center text-4xl">LEVEL UP!</div>

<div class="flex flex-row text-6xl gap-8 justify-center items-center my-4">
	{getPoolValue($character, 'level')}
	<ArrowRight class="w-8 h-8" />
	{getPoolValue($character, 'level') + 1}
</div>

<div class="text-center text-2xl">
	{$character.name}
	{$character.class?.name}
</div>

<div class="border-2 rounded-lg p-2 font-sans">
	<div>Choose a stat increase</div>
	<div class="grid grid-cols-3">
		{#each stats as stat}
			<button
				class={cx('p-2', selected === stat && 'border-2 border-white-off')}
				on:click={() => (selected = stat)}
			>
				{stat}
			</button>
		{/each}
	</div>
</div>
<div>OR</div>
<div>MOVES MOVES MOVES</div>
