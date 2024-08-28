<script lang="ts">
	import cs from 'classnames';
	let extraClasses = '';
	export { extraClasses as class };

	export let href = '';

	const classes = cs(
		'rough-button',
		'px-4 py-2 bg-white-off text-black-off hover:bg-white',
		extraClasses
	);
</script>

<a class={classes} {href}>
	<slot />
</a>
