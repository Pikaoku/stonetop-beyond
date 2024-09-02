<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	$: ({ supabase } = data);
	$: current = data.currentClass;

	let editting = true;

	const remove = async () => {
		if (current) {
			await supabase.from('class').delete().eq('id', current.id);
			goto('/admin/classes');
		}
	};

	$: console.log('current', current);
	$: instincts = (current?.instincts ?? []) as Record<'name' | 'description', string>[];
</script>

<button class="rounded-full bg-white text-black w-full" on:click={() => (editting = true)}
	>Edit</button
>
{#if current && !editting}
	<div>{current.name}</div>
	<div>{current.description}</div>
	<div>Instincts</div>
	<div>
		{#each instincts as instinct}
			<div>{instinct.name}</div>
			<div>{instinct.description}</div>
		{/each}
	</div>
{:else if current && editting}
	<input type="text" value={current.name} class="text-black px-2" />
	<input type="text" value={current.description} class="text-black px-2" />
	<div>Instincts</div>
	<div>
		{#each instincts as instinct}
			<div>{instinct.name}</div>
			<div>{instinct.description}</div>
		{/each}
	</div>

	<button class="rounded-full bg-white text-black w-full" on:click={remove}>Save Changes</button>
{/if}

<button class="rounded-full bg-white text-black w-full" on:click={remove}>Delete</button>
