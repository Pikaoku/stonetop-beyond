<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';

	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ notes, supabase, user } = data);
	$: console.log('profile', data.profile);
	// let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	// $: handleSubmit = async (evt) => {
	// 	evt.preventDefault();
	// 	if (!evt.target) return;

	// 	const form = evt.target as HTMLFormElement;

	// 	const note = (new FormData(form).get('note') ?? '') as string;
	// 	if (!note) return;

	// 	const { error } = await supabase.from('notes').insert({ note });
	// 	if (error) console.error(error);

	// 	invalidate('supabase:db:notes');
	// 	form.reset();
	// };
</script>

<!-- <h1>Private page for user: {user?.email}</h1> -->

<div class="flex flex-col w-full gap-6">
	<div class="">
		<h3 class="text-xl">Your characters</h3>
		None yet!<a class="underline" href="/app/characters/create">Create one.</a>
	</div>
	<div class="">
		<h3 class="text-xl">Your games</h3>
		None yet!
	</div>
</div>

<!-- <ul>
	{#each notes as note}
		<li>{note.note}</li>
	{/each}
</ul>
<form on:submit={handleSubmit}>
	<label>
		Add a note
		<input name="note" type="text" />
	</label>
</form> -->
