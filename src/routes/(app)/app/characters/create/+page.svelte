<script lang="ts">
	import { Carta, Markdown } from 'carta-md';

	import ClassSelector from './ClassSelector.svelte';
	const carta = new Carta();
	export let data;
	$: ({ classes } = data);

	let newCharacter = {
		class: null,
		background: null
	};

	let step: 'class' | 'background' = 'class';

	const chooseClass = (lable: string) => {
		newCharacter.class = lable as any;
	};
</script>

<svelte:head>
	<title>Character creation</title>
</svelte:head>

<h1 class="text-xl font-display mb-2">Create a character: {step}</h1>

{#if step === 'class'}
	<div class="mb-2">Choose a class from the options below</div>
	<div class="flex-1 h-full flex flex-col">
		{#each classes as c (c.id)}
			<ClassSelector
				on:click={() => chooseClass(c.name)}
				name={c.name}
				body={c.description}
				selected={newCharacter.class === c.name}
			/>
		{/each}
	</div>
	{#if newCharacter.class}
		<button class=" mt-2 sticky bottom-0 my-2 py-2">
			<div
				class="rough-button bg-white-off text-black w-full"
				on:click={() => (step = 'background')}
			>
				Confirm
			</div>
		</button>
	{/if}
{:else if step === 'background'}
	Choose a background for your class.
	<div class=" leading-tight p-2">
		<Markdown
			{carta}
			value={`You are the latest in a long line of Judges—born
here, apprenticed to the prior Judge, and charged
with the passing of the mantle. The Chronicle is a
rich repository of lore, but there’s no index, so good
luck finding anything.

When you **Know Things about the people or history
of Stonetop**, you have advantage.

When you **spend days, weeks, or months poring over
the Chronicle**, ask the GM a question, and the GM
will tell you what you learn in that time.`}
		/>
	</div>
{/if}
