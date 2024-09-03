<script lang="ts">
	import { invalidate } from '$app/navigation';
	import BottomDrawer from '$lib/components/ui/BottomDrawer.svelte';
	import { getMaxHP, getPoolValue, type Character } from '$lib/helpers/character';
	import { Minus, Plus } from 'lucide-svelte';
	import StatSquare from './StatSquare.svelte';
	import cx from 'classnames';
	import { writable } from 'svelte/store';
	import { supabase as supabaseStore } from '$lib/helpers/contextuals';

	$: supabase = $supabaseStore;

	export let character: Character;

	let value = 0;

	const open = writable(false);

	const handleUpdate = async () => {
		if (!character) return;
		const hp = getPoolValue(character, 'hp');
		const maxHP = getMaxHP(character);
		const newValue = Math.max(0, Math.min(maxHP, hp + value));
		if (newValue === hp) return;
		await supabase
			.from('pool')
			.update({ value: newValue })
			.eq('character_id', character.id)
			.eq('label', 'hp');
		invalidate('app:current-character');
		value = 0;
		open.set(false);
	};

	$: hp = getPoolValue(character, 'hp');
</script>

<BottomDrawer customOpenStore={open}>
	<StatSquare slot="trigger" value={hp} label="hp" />
	<div class="my-auto flex flex-col" slot="content">
		<div class="mx-auto w-20 my-4">
			<StatSquare label="HP" value={hp} style="black" />
		</div>
		<hr class="my-4" />
		<div class="mx-auto my-2 text-xl">Adjust HP</div>
		<div class="flex flex-row text-center">
			<button on:click={() => (value -= 1)} class="flex-1 touch-manipulation flex">
				<div
					class={cx(
						'bg-red-800 m-auto rounded-full aspect-square flex justify-center items-center',
						'active:scale-75 transition-transform duration-100 ease-in-out'
					)}
				>
					<Minus class="aspect-square w-12 text-white-off mx-auto" />
				</div>
			</button>
			<input
				type="number"
				min="0"
				bind:value
				class="text-black p-6 rounded-lg mx-auto w-28 text-center text-4xl font-sans"
			/>
			<button on:click={() => (value += 1)} class="flex-1 touch-manipulation flex">
				<div
					class={cx(
						'bg-green-800 m-auto rounded-full aspect-square flex justify-center items-center',
						'active:scale-75 transition-transform duration-100 ease-in-out'
					)}
				>
					<Plus class="aspect-square w-12 text-white-off mx-auto" />
				</div>
			</button>
		</div>
		<div class="flex flex-row justify-between items-center gap-4 mt-4 font-medium">
			<button
				on:click={() => handleUpdate()}
				class="p-2 my-2 bg-black-off px-8 mx-auto rounded uppercase text-white-off">Apply</button
			>
		</div>
	</div>
</BottomDrawer>
