<script lang="ts">
	import RoughLink from '$lib/components/RoughLink.svelte';
</script>

<svelte:head>
	<title>Character creation</title>
</svelte:head>

<h1 class="text-xl font-display">Character creation</h1>

Choose a class
<ul class="flex flex-col gap-3">
	<li><RoughLink href="/app/characters/create/warrior">Warrior</RoughLink></li>
	<li><RoughLink href="/app/characters/create/mage">Mage</RoughLink></li>
	<li><RoughLink href="/app/characters/create/rogue">Rogue</RoughLink></li>
	<li><RoughLink href="/app/characters/create/cleric">Cleric</RoughLink></li>
</ul>
