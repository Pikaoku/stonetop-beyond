<script lang="ts">
	import { Carta, MarkdownEditor } from 'carta-md';
	import type { TablesInsert } from '../../../../../../database.types';
	import '../github.css';

	export let createdMove: TablesInsert<'move'> = {
		name: '',
		body: ''
	};
	$: console.log('creating new move');

	let levelRequirementEnabled: boolean = false;

	export let data;
	$: ({ supabase } = data);

	const create = async () => {
		const { data, error } = await supabase.from('move').insert(createdMove);
		console.log(data, error);
		if (levelRequirementEnabled) {
      createdMove.level_requirement = 6;
    } else {
      createdMove.level_requirement = 0; // or 0, depending on your requirements
    }
	};

	const carta = new Carta();
	$: console.log('classes', data.classes);
	$: console.log('level req', levelRequirementEnabled);
</script>



Creating new move
<form on:submit={create} class="flex flex-col gap-2">

	<input type="text" bind:value={createdMove.name} placeholder="Name" class="text-black">
	<MarkdownEditor {carta} bind:value={createdMove.body} mode="tabs" theme="github"/>
	<select class="text-black" bind:value={createdMove.type}>
		<option value="">Select a class</option>
		<option value="basic">Standard move</option>
		<option value="homefront">Homefront move</option>
		<option value="expedition">Expedition move</option>
		<option value="class">Class move</option>
	</select>

	{#if createdMove.type === 'class'}
		<select class="text-black" bind:value={createdMove.class_id}>
			<option value="">Select a class</option>
			{#each data.classes as c}
				<option value={c.id}>{c.name}</option>
			{/each}
		</select>
	{/if}
	<button class="toggle-button" on:click={() => levelRequirementEnabled = !levelRequirementEnabled}>
		{#if levelRequirementEnabled}
		  <span>Level 6+ Required: ON</span>
		{:else}
		  <span>Level 6+ Required: OFF</span>
		{/if}
	  </button>
	<button type="submit">Confirm</button>
</form>

<style>
	/* Set your monospace font (Required to have the editor working correctly!) */
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
		color: white;
	}
</style>