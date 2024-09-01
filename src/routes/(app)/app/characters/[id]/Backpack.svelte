<script lang="ts">
	import ItemList from '$lib/components/items/ItemList.svelte';
	import RoughButton from '$lib/components/RoughButton.svelte';
	import BottomDrawer from '$lib/components/ui/BottomDrawer.svelte';
	import { writable } from 'svelte/store';
	import { character } from './stores';

	const open = writable(false);

	$: console.log($character.pack);
</script>

<BottomDrawer customOpenStore={open}>
	<RoughButton slot="trigger" class="flex-1 w-full">Backpack</RoughButton>
	<div slot="content" class="flex flex-col gap-2">
		<ItemList packLines={$character.pack} />
	</div>
</BottomDrawer>
