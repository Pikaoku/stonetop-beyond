<div class="bg-sky-900 h-full font-sans w-full flex flex-col">
	<a href="/admin" class=" py-3 px-3 bg-black/20">ADMIN SITE</a>
	<div class="flex-1 p-3 w-full flex flex-col gap-2 overflow-y-scroll">
		<slot />
	</div>
	<a href="/app" class="pb-3 pt-3 px-3 bg-black/20">Back to app</a>
</div>
