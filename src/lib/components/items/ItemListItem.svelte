<script lang="ts">
	import type { Tables } from '$lib/types/db';
	import { Square, SquarePercent, DiamondPercent, Circle, CircleSlash } from 'lucide-svelte';

	export let line: Tables<'pack_item'> & {
		item: Tables<'item'>;
	};
</script>

<div class="flex flex-col gap-1 leading-none">
	<div class="flex flex-row gap-2 items-center">
		{#if line.item.size !== 'small'}
			<div class="flex flex-row">
				{#each { length: line.item.weight } as _, i}
					<DiamondPercent />
				{/each}
			</div>
		{:else}
			<SquarePercent class="h-3" />
		{/if}
		<span>
			{`${line.item.name}${line.item.qualifier ? `, ${line.item.qualifier}` : ''}`}
		</span>
		{#if line.item.traits}
			<span class="italic text-black-off/75">({line.item.traits})</span>
		{/if}
	</div>
	<div class="pl-8">
		{#if line.item.instructions}
			<div>{line.item.instructions}</div>
		{/if}
		{#if line.item.charges > 0}
			<div class="flex flex-row items-center">
				{#each { length: line.uses } as _}
					<CircleSlash class="h-4 -ml-1" />
				{/each}
				{#each { length: line.item.charges - line.uses } as _}
					<Circle class="h-4 -ml-1" />
				{/each}
				{#if line.item.charges_label}
					{line.item.charges_label}
				{/if}
			</div>
		{/if}
	</div>
</div>
