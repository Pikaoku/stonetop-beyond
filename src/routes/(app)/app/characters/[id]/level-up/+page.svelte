<script lang="ts">
	import { createRadioGroup, melt } from '@melt-ui/svelte';

	import { character } from '../stores';
	import { getPoolValue } from '$lib/helpers/character';
	import { ArrowRight } from 'lucide-svelte';
	import cx from 'classnames';
	import { page } from '$app/stores';

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked },
		states: { value }
	} = createRadioGroup();

	const stats = [
		'strength',
		'dexterity',
		'consitution',
		'intelligence',
		'wisdom',
		'charisma'
	] as const;

	$: console.log($page.data.moveOptions);

	$: moves = $page.data.moveOptions;

	$: console.log('value', $value);
</script>

<div class="font-sans text-left text-lg">Levelling up</div>
<div class="text-left text-2xl">
	{$character.name}
	{$character.class?.name}
</div>

<div class="flex flex-row text-6xl gap-8 justify-center items-center my-4">
	{getPoolValue($character, 'level')}
	<ArrowRight class="w-8 h-8" />
	{getPoolValue($character, 'level') + 1}
</div>

<form class="flex flex-col w-full" method="post">
	<div use:melt={$root}>
		<input use:melt={$hiddenInput} name="move_id" />
		<div class="rounded-lg p-2 font-sans">
			<div>Choose a stat increase</div>
			<div class="grid grid-cols-6">
				{#each stats as stat}
					<button
						class={cx(
							'p-2 border-2 rounded-full aspect-square text-center',
							$isChecked(stat) ? ' border-white-off' : 'border-transparent'
						)}
						use:melt={$item(stat)}
					>
						{stat.slice(0, 3).toUpperCase()}
					</button>
				{/each}
			</div>
		</div>
		<div class="mx-auto">OR</div>
		<div class="mx-auto">Choose a new move</div>
		<div class="flex flex-col gap-3 w-full">
			{#each moves as move}
				<button
					class={cx('border-2 border-white-off p-2 relative')}
					use:melt={$item(move.id.toString())}
				>
					<div
						class={cx(
							'absolute top-0 left-0 border-b-2 border-r-2 border-white-off size-6',
							$isChecked(move.id.toString()) && 'bg-white-off'
						)}
					/>
					<div class="font-medium text-xl">{move.name}</div>
					<div>{move.body}</div>
				</button>
			{/each}
		</div>
	</div>
	<div class="bg-black-off p-2">
		<button
			type="submit"
			class="text-black-off p-2 w-full sticky bottom-0 left-0 right-0 bg-white-off">Level up</button
		>
	</div>
</form>
