<script lang="ts">
	import ItemList from '$lib/components/items/ItemList.svelte';

	export let data;
	$: console.log('data', data.items);

	$: lines = data?.items?.filter((line) => !!line.item) ?? [];
</script>

<div class="bg-white-off text-black-off rounded shadow p-2">
	<ItemList packLines={lines} />
</div>
