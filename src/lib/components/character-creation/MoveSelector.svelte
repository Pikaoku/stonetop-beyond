<script lang="ts">
	import { Square, SquareCheck } from 'lucide-svelte';

	import { Carta, Markdown } from 'carta-md';
	const carta = new Carta();

	export let name: string;
	export let body: string;
	export let selected: boolean = false;
</script>

<button class="p-3 leading-tight text-left" on:click>
	{#if selected}
		<div>Selected</div>
	{/if}
	<div class="text-lg mb-2 flex flex-row gap-2">
		{#if selected}
			<SquareCheck class="my-auto" />
		{:else}
			<Square class="my-auto" />
		{/if}
		<div class="my-auto leading-none">{name}</div>
	</div>
	<Markdown {carta} value={body} />
</button>
