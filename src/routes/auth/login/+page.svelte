<svelte:head>
	<title>Stoptop Beyond</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-3xl tracking-wider mx-auto font-display">Login</h1>
<form method="POST" action="?/login">
	<div class="flex flex-col gap-2 text-center">
		<fieldset class="flex flex-col">
			<label for="email">Email</label>
			<input name="email" type="email" class="rounded-sm px-2 py-1 text-black-off" />
		</fieldset>
		<fieldset class="flex flex-col">
			<label for="password">Password </label>
			<input name="password" type="password" class="rounded-sm px-2 py-1 text-black-off" />
		</fieldset>
		<button
			type="submit"
			class="rough-button mt-4 bg-white text-black mx-auto px-8 py-1 font-semibold">Login</button
		>
		<a href="/auth/create" class="mt-2">
			No account? <span class="underline">Signup</span>
		</a>
		<a href="/auth/forgot" class="mt-2 underline"> Reset password </a>
	</div>
</form>
