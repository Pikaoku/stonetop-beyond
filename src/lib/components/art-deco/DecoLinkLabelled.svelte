<script lang="ts">
	import cx from 'classnames';
	import DecoLink from './DecoLink.svelte';

	let className = '';
	export { className as class };
	export let label = '';
	export let text = '';
	export let to = '';
</script>

<div class="{cx('text-center w-full', className)}">
	<div class="text-deco-accent text-sm">{label}</div>
	<DecoLink {text} {to} />
</div>
