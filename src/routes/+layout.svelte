<script>
	import '../app.css';
</script>

<div class="flex flex-col h-screen">
	<div class="flex flex-col m-auto max-w-3xl">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black.off);
		color: theme(colors.white.off);
		@apply font-body text-lg;
	}
</style>
