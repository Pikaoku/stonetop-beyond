<script lang="ts">
	import { get } from 'svelte/store';
	import { character } from '../stores';
	import { supabase } from '$lib/helpers/contextuals';
	import { onMount } from 'svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import InventoryItem from '$lib/components/items/InventoryItem.svelte';

	$: packQuery = createQuery({
		queryKey: ['character', $character.id, 'pack'],
		queryFn: async () => {
			const { data, error } = await $supabase
				.from('pack_item')
				.select('*, item (*)')
				.eq('character_id', $character.id);
			if (error) {
				throw error;
			}
			return await data;
		}
	});

	let current: number | null = null;
</script>

INVENTORY FOR YER MAN {$character.name}

<div class="bg-white-off text-black-off rounded p-2">
	<h2 class="font-medium text-lg">Current pack</h2>
	{#if $packQuery.data}
		<div class="flex flex-col gap-1 justify-normal">
			{#each $packQuery.data as item}
				<InventoryItem {item} on:click={() => (current = item.id)} expanded={current === item.id} />
			{/each}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
	{#if $packQuery.isError}
		<p>Error: {$packQuery.error.message}</p>
	{/if}
</div>
<div>
	<h2>Other possessions</h2>
	<div class="flex flex-col gap-1 justify-normal">
		<!-- {#each possessions as item}
			<button
				class="text-left py-1 px-2 rounded active:bg-black-off/5 scale-100 active:scale-y-90 active:scale-x-95 transition-transform duration-75"
				>{item.item.name}</button
			>
		{/each} -->
	</div>
</div>
