<script>
	import candle from '$lib/images/candle_flicker.webm';
	import RoughLink from '$lib/components/RoughLink.svelte';
</script>

<svelte:head>
	<title>Stoptop Beyond</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-4/5 mx-auto p-4 my-auto flex flex-col gap-2 relative max-h-screen">
	<h1
		class="-mb-24 text-center border-b-2 border-white-off/60 pb-4 font-display tracking-wider z-10"
	>
		<div class="text-5xl overflow-hidden">Stonetop</div>
		<div class="text-3xl">Beyond</div>
	</h1>

	<video src={candle} class="z-0 max-h-[600px]" autoplay muted loop />

	<div class="flex flex-row items-center z-10">
		<RoughLink class="mx-auto" href="/auth/login">Lets begin</RoughLink>
	</div>
</div>
