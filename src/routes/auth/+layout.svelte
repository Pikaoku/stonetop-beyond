<script>
	import DecoLink from '../../lib/components/art-deco/DecoLink.svelte';
</script>

<div class="bg-deco-bg h-screen w-screen flex font-sans relative overflow-hidden">
	<div class="m-auto max-w-lg w-full">
		<div class="deco-corner tl-corner absolute" />
		<div class="deco-corner br-corner absolute" />
		<h1 class="text-center mx-auto mb-6 w-full font-display tracking-widest">
			<div class="text-5xl">Stonetop</div>
		</h1>
		<div class="flex-1 flex flex-col gap-2 w-full p-4 relative">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.deco-corner {
		width: 200px;
		height: 200px;
		background: linear-gradient(
			to bottom,
			transparent 60%,
			theme('colors.deco.accent') 60%,
			theme('colors.deco.accent') 62%,
			transparent 62%,
			transparent 68%,
			theme('colors.deco.accent') 68%,
			theme('colors.deco.accent') 70%,
			transparent 70%,
			transparent 76%,
			theme('colors.deco.accent') 76%,
			theme('colors.deco.accent') 78%,
			theme('colors.deco.bg') 78%
		);
	}

	.tl-corner {
		inset: -100px auto auto -100px;
		transform: rotate(-45deg);
	}

	.br-corner {
		inset: auto -100px -100px auto;
		transform: rotate(-225deg);
	}
</style>
