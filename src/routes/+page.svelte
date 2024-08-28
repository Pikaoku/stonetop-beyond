<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
