<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let data;

	$: console.log('moves', data.move);
	
	$: console.log('classes', data.classes);
</script>

Moves

<a href="/admin/moves/new" class="rounded-full text-center bg-white text-black">New + </a>
{#each data.move as m (m.id)}
	<a href={`/admin/moves/${m.id}`}>
		<div class="p-2 border rounded-sm shadow bg-white/10">
			<div class="font-bold"><SvelteMarkdown source={m.name}/></div>
			<div class="text-sm"><SvelteMarkdown source={m.body} /></div>
		</div>
	</a>
{:else}
	<div>NO MOVES YET BOSS</div>
{/each}
