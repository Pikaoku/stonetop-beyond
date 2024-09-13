<script>
	import { page } from '$app/stores';
	import DecoBox from '$lib/components/art-deco/DecoBox.svelte';
	import DecoLinkLabelled from '$lib/components/art-deco/DecoLinkLabelled.svelte';
	import DecoTextbox from '$lib/components/art-deco/DecoTextbox.svelte';
	import DecoButton from '../../../lib/components/art-deco/DecoButton.svelte';
</script>

<svelte:head>
	<title>Stoptop Beyond</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<DecoBox>
	<form method="POST" action="?/login" class="flex flex-col gap-2">
		<h1 class="text-3xl mr-auto">Login</h1>
		<DecoTextbox required name="email" type="email" placeholder="Enter email ..." />
		<DecoTextbox required name="password" type="password" placeholder="... and password" />
		<a href="/auth/forgot" class="text-deco-accent ml-auto text-right text-sm underline"
			>Forgot password</a
		>
		<DecoButton text="Login" type="submit" />
	</form>
	{#if $page.form?.errorMessage}
		<div class="bg-red-200 text-red-500 p-1 px-2 rounded text-sm text-center w-4/5 mx-auto mt-2">
			{$page.form?.errorMessage}
		</div>
	{/if}
</DecoBox>
<DecoLinkLabelled label="No account?" text="Sign up" to="/auth/create" class="mt-4" />
