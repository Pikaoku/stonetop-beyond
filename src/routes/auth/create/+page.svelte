<h1 class="text-3xl tracking-wider mx-auto font-display">Create account</h1>
<form method="POST" action="?/signup">
	<div class="flex flex-col gap-2 text-center">
		<input
			placeholder="Enter your name here"
			name="player_name"
			class="rounded-sm px-2 py-1 text-black-off"
		/>
		<input
			placeholder="and your email"
			name="email"
			type="email"
			class="rounded-sm px-2 py-1 text-black-off"
		/>
		<input
			placeholder="now a safe password"
			name="password"
			type="password"
			class="rounded-sm px-2 py-1 text-black-off"
		/>
		<input
			placeholder="and lastly, a display name"
			name="display_name"
			class="rounded-sm px-2 py-1 text-black-off"
		/>
		<button
			type="submit"
			class="mt-4 bg-white text-black mx-auto px-8 py-1 font-semibold rough-button"
			>Create your account</button
		>
		<a href="/auth/login" class="mt-2">
			Already done this? <span class="underline">Login</span>
		</a>
	</div>
</form>
