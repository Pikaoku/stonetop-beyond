<script lang="ts">
	import { page } from '$app/stores';
	import DecoBox from '$lib/components/art-deco/DecoBox.svelte';
	import DecoButton from '$lib/components/art-deco/DecoButton.svelte';
	import DecoLinkLabelled from '$lib/components/art-deco/DecoLinkLabelled.svelte';
	import DecoTextbox from '$lib/components/art-deco/DecoTextbox.svelte';
</script>

<DecoBox>
	<h1 class="text-3xl mr-auto">Create</h1>
	<form method="POST" action="?/signup" class="flex flex-col gap-2">
		<DecoTextbox required placeholder="Enter your name here" name="player_name" />
		<DecoTextbox required placeholder="... and email" name="email" type="email" />
		<DecoTextbox required placeholder="... and password" name="password" type="password" />
		<DecoButton text="Create your account" type="submit" class="mt-2" />
	</form>
	{#if $page.form?.errorMessage}
		<div class="bg-red-200 text-red-500 p-1 px-2 rounded text-sm text-center w-4/5 mx-auto mt-2">
			{$page.form?.errorMessage}
		</div>
	{/if}
</DecoBox>
<DecoLinkLabelled label="Already done this?" text="Login" to="/auth/login" class="mt-4" />
