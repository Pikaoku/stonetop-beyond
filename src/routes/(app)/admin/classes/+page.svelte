<script lang="ts">
	export let data;

	$: console.log('classes', data.classes);
</script>

Classes

{#each data.classes as c (c.id)}
	<a href={`/admin/classes/${c.id}`}>
		<div class="p-2 border rounded-sm shadow bg-white/10">
			<div class="font-bold">{c.name}</div>
			<div class="text-sm">{c.description}</div>
		</div>
	</a>
{:else}
	<div>NO CLASSES YET BOSS</div>
{/each}
<a href="/admin/classes/new" class="rounded-full text-center bg-white text-black">New + </a>
