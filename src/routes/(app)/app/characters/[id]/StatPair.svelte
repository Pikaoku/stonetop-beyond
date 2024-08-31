<script lang="ts">
	import cx from 'classnames';
	import type { Tables } from '$lib/types/db';
	import { CheckSquare, Square } from 'lucide-svelte';
	import StatSquare from './StatSquare.svelte';

	export let topLabel: keyof Tables<'stat_line'>;
	export let topValue = 0;
	export let bottomLabel: keyof Tables<'stat_line'>;
	export let bottomValue = 0;
	export let debilitated: boolean = false;
	export let debility: string = '';
</script>

<button
	on:click
	class={cx(
		'flex flex-col rounded-lg overflow-hidden gap-4 border',
		debilitated ? 'border-red-500 text-red-500' : 'border-white-off'
	)}
>
	<StatSquare value={debilitated ? topValue - 1 : topValue} label={topLabel.slice(0, 3)} />
	<StatSquare
		value={debilitated ? bottomValue - 1 : bottomValue}
		label={bottomLabel.slice(0, 3)}
		labelPosition="top"
	/>
	<div class="flex flex-row gap-1 justify-center pb-1 -mt-3 mx-auto">
		<div class="my-auto">{debility}</div>
		{#if debilitated}
			<CheckSquare size="16" class="text-red-500 my-auto" />
		{:else}
			<Square size="16" class="my-auto" />
		{/if}
	</div>
</button>
