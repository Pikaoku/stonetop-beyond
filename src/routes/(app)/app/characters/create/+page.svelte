<script lang="ts">
	import RoughLink from '$lib/components/RoughLink.svelte';

	export let data;
	$: ({ classes } = data);

	let newCharacter = {
		class: null,
		background: null
	};

	let step: 'class' | 'background' = 'class';

	const chooseClass = (lable: string) => {
		newCharacter.class = lable;
		step = 'background';
	};
</script>

<svelte:head>
	<title>Character creation</title>
</svelte:head>

<h1 class="text-xl font-display mb-2">Create a character: {step}</h1>

{#if step === 'class'}
	<div class="mb-2">Choose a class from the options below</div>
	<div class="flex flex-col gap-3">
		{#each classes as c (c.id)}
			<button
				class="rough-button bg-white-off text-black p-3 leading-tight text-left"
				on:click={() => chooseClass(c.name)}
			>
				<div>{c.name}</div>
				<div>{c.description}</div>
			</button>
		{/each}
	</div>
{:else if step === 'background'}
	background
{/if}
