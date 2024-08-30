<script>
	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<div class="p-3 flex flex-col gap-2 h-full">
	<div class="font-display text-2xl tracking-wider">Stonetop Characters</div>
	<main class="h-full">
		<slot />
	</main>
</div>
