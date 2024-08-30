<script>
	export let data;
	$: ({ supabase } = data);
</script>

<div class="p-3 flex flex-col gap-2 h-full">
	<div class="font-display text-2xl tracking-wider">Stonetop Characters</div>
	<main class="h-full flex flex-col">
		<slot />
	</main>
</div>
