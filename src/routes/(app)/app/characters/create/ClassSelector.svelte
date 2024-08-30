<script lang="ts">
	import { Carta, Markdown } from 'carta-md';
	import cs from 'classnames';
	const carta = new Carta();

	export let name: string;
	export let body: string;
	export let selected: boolean = false;
</script>

<button
	class={cs(
		'even:border-t even:border-b p-2 leading-tight text-left',
		'transition-colors duration-300 ease-out',
		selected && 'bg-white-off text-black-off'
	)}
	on:click
>
	<div class="text-lg mb-2 flex flex-row gap-2">
		<div class="my-auto leading-none">{name}</div>
	</div>
	<Markdown {carta} value={body} />
</button>
