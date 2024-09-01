<script lang="ts">
	import { Minus, Plus } from 'lucide-svelte';
	import RoughLink from '$lib/components/RoughLink.svelte';
	import { getPoolValue, getMaxHP } from '$lib/helps/character.js';
	import StatSquare from '../StatSquare.svelte';
	import { goto, invalidate } from '$app/navigation';

	export let data;

	const supabase = data.supabase;

	const character = data.character;

	let value = 0;

	const handleUpdate = async (negate: boolean = false) => {
		if (!character) return;
		const hp = getPoolValue(character, 'hp');
		const maxHP = getMaxHP(character);
		const newValue = Math.max(0, Math.min(maxHP, negate ? hp - value : hp + value));
		if (newValue === hp) return;
		await supabase
			.from('pool')
			.update({ value: newValue })
			.eq('id', character.id)
			.eq('label', 'hp');
		await invalidate('app:current-character');
		goto(`/app/characters/${character.id}`);
	};

	$: console.log('charcater', character);
</script>

<div class="my-auto flex flex-col">
	{#if character}
		<RoughLink href="/app/characters/{character.id}" class="w-full text-center"
			>Back to character</RoughLink
		>
		<div class="mx-auto w-20 my-4">
			<StatSquare label="HP" value={getPoolValue(character, 'hp')} />
		</div>
		<hr class="my-4" />
		<div class="flex flex-row text-center">
			<button on:click={() => (value -= 1)} class="flex-1 touch-manipulation"
				><Minus class="text-xl mx-auto" /></button
			>
			<input
				type="number"
				min="0"
				bind:value
				class="text-black p-6 rounded-lg mx-auto w-24 text-center text-4xl font-sans"
			/>
			<button on:click={() => (value += 1)} class="flex-1 touch-manipulation"
				><Plus class="text-xl mx-auto" /></button
			>
		</div>
		<div class="flex flex-row justify-between items-center gap-4 mt-4 font-medium">
			<button on:click={() => handleUpdate(true)} class="p-2 my-2 bg-red-800 rounded uppercase"
				>Apply damage</button
			>
			or
			<button on:click={() => handleUpdate()} class="p-2 my-2 bg-green-600 rounded uppercase"
				>Apply healing</button
			>
		</div>
	{/if}
</div>
