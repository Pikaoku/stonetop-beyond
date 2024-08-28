<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex flex-col h-screen">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black.off);
		color: theme(colors.white.off);
		@apply font-body text-lg;
	}
</style>
