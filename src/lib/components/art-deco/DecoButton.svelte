<script lang="ts">
	import cx from 'classnames';

	export let text: string;
	export let type: 'button' | 'submit' = 'button';
	let className = '';
	export { className as class };
</script>

<button
	{type}
	on:click
	class={cx(
		'px-6 py-1 border-2 bg-deco-bg border-deco-accent shadow overflow-hidden relative w-full text-lg',
		className
	)}
>
	<div class="deco-corner tl-corner absolute" />
	<div class="deco-corner br-corner absolute" />
	<div class="relative">{text}</div>
</button>

<style lang="postcss">
	.deco-corner {
		width: 200px;
		height: 200px;
		background: linear-gradient(
			to bottom,
			theme('colors.deco.bg') 53%,
			theme('colors.deco.accent') 53%,
			theme('colors.deco.accent') 54%,
			theme('colors.deco.bg') 54%,
			theme('colors.deco.bg') 56%,
			theme('colors.deco.accent') 56%,
			theme('colors.deco.accent') 57%,
			theme('colors.deco.bg') 57%,
			theme('colors.deco.bg') 59%,
			theme('colors.deco.accent') 59%,
			theme('colors.deco.accent') 60%,
			theme('colors.deco.bg') 60%
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
