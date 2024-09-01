<script lang="ts">
	import type { Tables } from '$lib/types/db';
	import ItemListItem from './ItemListItem.svelte';

	// export let interactable = false;

	export let packLines: (Tables<'pack_item'> & {
		item: Tables<'item'> | null;
	})[] = [];

	$: filtered = packLines.filter((line) => line.item !== null) as (Tables<'pack_item'> & {
		item: Tables<'item'>;
	})[];

	$: bigItems = filtered
		.filter((line) => line.item.size !== 'small')
		.sort((a, b) => a.item.name.localeCompare(b.item.name))
		.sort((a, b) => b.item.weight - a.item.weight);

	$: smallItems = filtered
		.filter((line) => line.item.size === 'small')
		.sort((a, b) => a.item.name.localeCompare(b.item.name));
</script>

<div class="flex flex-col gap-3">
	{#each bigItems as line (line.id)}
		{#if line.item !== null}
			<ItemListItem {line} />
		{/if}
	{/each}
	{#each smallItems as line (line.id)}
		{#if line.item !== null}
			<ItemListItem {line} />
		{/if}
	{/each}
</div>
