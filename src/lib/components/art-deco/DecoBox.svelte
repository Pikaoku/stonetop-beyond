<div class="text-left flex flex-col gap-2 p-4 pt-6 border-3 border-deco-accent relative">
	<div class="absolute flex flex-row w-auto left-auto right-auto -top-[15px]">
		<div class="border-2 border-deco-accent bg-deco-bg size-6 rotate-45 -mr-4" />
		<div
			class=" border-2 border-deco-accent bg-deco-bg size-6 rotate-45 z-10 stripe-gradiant-background"
		/>
		<div class="border-2 border-deco-accent bg-deco-bg size-6 rotate-45 -ml-4" />
		<div class="border-2 border-deco-accent bg-deco-bg size-2 mt-[9px] ml-3 rotate-45" />
	</div>
	<div
		class="absolute border-2 border-deco-accent bg-deco-bg size-2 rotate-45 -bottom-[6px] right-4"
	/>
	<slot />
</div>

<style lang="postcss">
	.stripe-gradiant-background {
		background: repeating-linear-gradient(
			theme('colors.deco.bg'),
			theme('colors.deco.bg') 0px,
			theme('colors.deco.bg') 3px,
			theme('colors.deco.accent') 3px,
			theme('colors.deco.accent') 5px,
			theme('colors.deco.bg') 5px
		);
	}

	.solid-background {
		background: theme('colors.deco.bg');
	}
</style>
