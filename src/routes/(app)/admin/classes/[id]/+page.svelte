<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	$: ({ supabase } = data);
	$: current = data.currentClass;

	const remove = async () => {
		if (current) {
			await supabase.from('class').delete().eq('id', current.id);
			goto('/admin/classes');
		}
	};
</script>

{#if current}
	<div>{current.name}</div>
	<div>{current.description}</div>
{/if}
<button class="rounded-full bg-white text-black w-full" on:click={remove}>Delete</button>
