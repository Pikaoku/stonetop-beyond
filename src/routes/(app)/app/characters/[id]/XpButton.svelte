<script lang="ts">
	import BottomDrawer from '$lib/components/ui/BottomDrawer.svelte';
	import { writable } from 'svelte/store';
	import StatSquare from './StatSquare.svelte';
	import { getPoolByLabel, getPoolValue } from '$lib/helpers/character';
	import { character } from './stores';
	import { canLevelUp, getXpCostForLevel } from '$lib/logic/stonetop';
	import { supabase } from '$lib/helpers/contextuals';
	import { invalidate } from '$app/navigation';
	import cx from 'classnames';

	$: xp = getPoolValue($character, 'xp');

	const open = writable(false);

	$: currentLevel = getPoolValue($character, 'level') ?? 1;
	$: currentXp = getPoolValue($character, 'xp') ?? 0;
	$: levelUpAvailable = canLevelUp(currentLevel, currentXp);
	$: isWouldBeHero = $character.class?.name === 'Would-be Hero'; // Needs to be a specific background
	$: canBurnBright = isWouldBeHero || levelUpAvailable;

	$: adjustXp = async (amount = 1) => {
		await $supabase.from('pool').upsert({
			id: getPoolByLabel($character, 'xp')?.id,
			value: Math.max(0, currentXp + amount),
			character_id: $character.id,
			label: 'xp'
		});
		invalidate('app:current-character');
	};
</script>

<BottomDrawer customOpenStore={open}>
	<StatSquare
		slot="trigger"
		value={xp}
		label={levelUpAvailable ? 'LVL UP!' : 'xp'}
		style={levelUpAvailable ? 'gold' : 'white'}
	/>
	<div class="my-auto flex flex-col gap-6" slot="content">
		<div class="flex flex-row mx-auto font-extrabold font-sans gap-1 items-end">
			<span
				class={cx('text-6xl', {
					'text-blue-900': !levelUpAvailable,
					'text-yellow-600': levelUpAvailable
				})}>{xp}</span
			>
			<span class="text-2xl">/</span>
			<span class="text-2xl">{getXpCostForLevel(getPoolValue($character, 'level') ?? 1 + 1)}</span>
			<span>XP</span>
		</div>
		<div class="mx-auto flex flex-col gap-2 w-full">
			<button
				class="bg-black-off text-white-off py-1 rounded font-medium tracking-wider"
				on:click={() => adjustXp(1)}>Mark XP</button
			>
			<button
				class="bg-black-off text-white-off py-1 rounded font-medium tracking-wider"
				disabled={currentXp === 0}
				on:click={() => adjustXp(-1)}>Sap XP</button
			>
			<button
				class="bg-red-800 text-white-off py-1 rounded font-medium tracking-wider"
				on:click={() => adjustXp(-2)}
				disabled={!canBurnBright}>Burn bright</button
			>
			<a
				href={`/app/characters/${$character.id}/level-up`}
				class={cx(
					'py-2 rounded font-medium tracking-wider text-yellow-500 ',
					'disabled:opacity-40 text-center',
					levelUpAvailable ? 'bg-black-off' : 'bg-black-off'
				)}
				disabled={!levelUpAvailable}>Level up</a
			>
		</div>
	</div></BottomDrawer
>
