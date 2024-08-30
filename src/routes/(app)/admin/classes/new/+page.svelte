<script lang="ts">
	import type { TablesInsert } from '../../../../../../database.types';

	export let createdClass: TablesInsert<'class'> = {
		description: '',
		name: ''
	};
	$: console.log('creating new class');

	export let data;
	$: ({ supabase } = data);

	const create = async () => {
		const { data, error } = await supabase.from('class').insert(createdClass);
		console.log(data, error);
	};
</script>

Creating new class
<form on:submit={create} class="flex flex-col gap-2">
	<input type="text" bind:value={createdClass.name} placeholder="Name" class="text-black" />
	<input
		type="text"
		bind:value={createdClass.description}
		placeholder="Description"
		class="text-black"
	/>
	<button type="submit">Confirm</button>
</form>
