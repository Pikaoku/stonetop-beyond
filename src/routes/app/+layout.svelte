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

<div class="p-3 flex flex-col gap-2">
	<div class="font-display text-4xl tracking-wider">Stonetop Beyond</div>
	<main>
		<slot />
	</main>
</div>
