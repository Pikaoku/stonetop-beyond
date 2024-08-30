<script>
	import RoughLink from '$lib/components/RoughLink.svelte';
</script>

<svelte:head>
	<title>Stoptop Beyond</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-4/5 mx-auto p-4 my-auto flex flex-col gap-2 relative">
	<h1
		class="text-center mx-auto border-b-2 border-white-off/60 pb-4 px-8 mb-6 w-full font-display tracking-widest"
	>
		<div class="text-5xl">Stonetop</div>
		<div class="text-3xl">Beyond</div>
	</h1>

	<RoughLink class="mx-auto" href="/auth/login">Login</RoughLink>
	<div class="mx-auto">or</div>
	<RoughLink class="mx-auto" href="/auth/create">Signup</RoughLink>
</div>
