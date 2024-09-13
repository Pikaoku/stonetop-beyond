<script lang="ts">
	import { Circle, CircleX } from 'lucide-svelte';
	export let max;
	export let current = 0;
</script>

<div class="flex flex-row gap-1 items-center">
	{#each Array(current) as _, i}
		<CircleX class="w-6 h-6 text-black-off" />
	{/each}
	{#each Array(max) as _, i}
		<Circle class="w-6 h-6 text-black-off" />
	{/each}
</div>
