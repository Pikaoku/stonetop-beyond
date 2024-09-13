<script lang="ts">
	export let text: string;
	export let to: string = '';
</script>

<a href={to} class="flex flex-row group max-w-md mx-auto w-full">
	<div
		class="size-1 rotate-45 z-10 my-auto !ml-8 border-2 border-deco-accent bg-deco-accent group-hover:bg-deco-light"
	/>
	<div
		class="my-auto size-2 rotate-45 border-2 border-deco-accent bg-deco-bg group-hover:bg-deco-light"
	/>
	<div class="my-auto h-[3px] bg-deco-accent group-hover:bg-deco-light flex-1" />
	<div class="mx-4 group-hover:font-medium tracking-wide">
		{text}
	</div>
	<div class="my-auto h-[3px] bg-deco-accent group-hover:bg-deco-light flex-1" />
	<div
		class="my-auto size-2 rotate-45 border-2 border-deco-accent bg-deco-bg group-hover:bg-deco-light"
	/>
	<div
		class="size-1 rotate-45 z-10 my-auto !mr-8 border-2 border-deco-accent bg-deco-accent group-hover:bg-deco-light"
	/>
</a>
