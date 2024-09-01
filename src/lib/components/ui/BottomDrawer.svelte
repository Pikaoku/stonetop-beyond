<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import cx from 'classnames';
	import { X } from 'lucide-svelte';
	import type { Writable } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';

	export let defaultOpen = false;
	export let triggerWrapperClasses = '';
	export let customOpenStore: Writable<boolean> | undefined = undefined;

	const {
		elements: { trigger, overlay, content, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true,
		defaultOpen,
		open: customOpenStore
	});
</script>

<button
	use:melt={$trigger}
	class={cx(
		'cursor-pointer',
		'active:scale-90 transition-all duration-100 ease-in-out',
		triggerWrapperClasses
	)}
>
	<slot name="trigger" />
</button>

{#if $open}
	<div class="" use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50"
			transition:fade={{ duration: 500 }}
		/>
		<div
			class="fixed left-1/2 bottom-0 z-50 max-h-[85vh] w-[95vw] mx-auto max-w-[450px] -translate-x-1/2 rounded-t-xl bg-white-off text-black-off p-6 pt-10 shadow-lg"
			transition:fly={{
				duration: 500,
				delay: 100,
				y: 100
			}}
			use:melt={$content}
		>
			<slot name="content" />
			<button
				use:melt={$close}
				aria-label="close"
				class="absolute right-4 top-4 inline-flex h-8 w-8 appearance-none items-center justify-center rounded-full p-1 text-black-off"
			>
				<X class="size-4" />
			</button>
		</div>
	</div>
{/if}
