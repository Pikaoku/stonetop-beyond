<script lang="ts">
	export let type: string = 'text';
</script>

<input
	{type}
	class="px-2 py-[2px] text-white border-2 border-deco-accent active:outline-deco-light bg-deco-bg placeholder:text-deco-accent"
	{...$$restProps}
/>
