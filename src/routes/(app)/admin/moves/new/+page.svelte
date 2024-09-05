<script lang="ts">
	import { goto } from '$app/navigation';
	import { createCheckbox, createSelect, melt } from '@melt-ui/svelte';
	import { Carta, MarkdownEditor } from 'carta-md';
	import { Check, ChevronDown, Cross, Minus } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import type { TablesInsert } from '../../../../../../database.types';
	import '../github.css';

	export let createdMove: TablesInsert<'move'> = {
		name: '',
		body: '',
		level_requirement: 0,
		class_id: null
	};
	$: console.log('creating new move');

	export let data;
	$: ({ supabase } = data);

	let levelRequirementEnabled: boolean = false;

	const create = async () => {
		const { data, error } = await supabase.from('move').insert(createdMove);
		console.log(data, error);
		if (levelRequirementEnabled) {
			createdMove.level_requirement = 6;
		} else {
			createdMove.level_requirement = 0;
		}
		goto('/admin/moves');
	};

	const carta = new Carta();

	const typeOptions = {
		basic: ['basic', 'homefront', 'expedition'],
		class: data.classes.map((c) => c.name)
	};

	const {
		elements: { trigger, menu, option, group, label, groupLabel },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	});

	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		defaultChecked: false
	});

	let selectedMoveType = $selectedLabel;

	function setSelectedMoveType(moveType: string) {
		selectedMoveType = moveType;
		if (typeOptions.class.includes(moveType)) {
			createdMove.class_id = data.classes.find((c) => c.name === moveType)?.id ?? null;
		}
	}

	$: console.log('levelrequirement', levelRequirementEnabled);
</script>

<!-- TODO:  Handle Level Requirements cleaner-->
<!-- TODO:  flush the page after a move is created (class ID hangs)-->

Creating new move
<form on:submit={create} class="flex flex-col gap-2 p-4">
	<input type="text" bind:value={createdMove.name} placeholder="Name" class="text-black" />
	<MarkdownEditor {carta} bind:value={createdMove.body} mode="tabs" theme="github" />
	<button
		class="flex h10 min-w-[220px] items-center justify-between rounded-lg bg-white px-3 py-2
		text-black capitalize shadow transition-opacity hover-opacity-90"
		use:melt={$trigger}
		aria-label="Move Type"
		on:click={() => setSelectedMoveType($selectedLabel)}
	>
		{$selectedLabel || 'Select a Move Type'}
		<ChevronDown class="size-5" />
	</button>
	{#if $open}
		<div
			class="z-10 flex max-h-[300px] flex-col
			overflow-y-auto rounded-lg bg-white p-1 shadow focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each Object.entries(typeOptions) as [key, arr]}
				<div use:melt={$group(key)}>
					<div
						class="py-1 pl-4 font-semibold capitalize text-neutral-800"
						use:melt={$groupLabel(key)}
					>
						{key}
					</div>
					{#each arr as type}
						<div
							class="relative cursor-pointer rounded-lg py-1 pl-8 pr-4 text-neutral-800
              hover:bg-magnum-100 focus:z-10
              focus:text-magnum-700
              data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900
              data-[disabled]:opacity-50 capitalize"
							use:melt={$option({ value: type, label: type })}
						>
							<div class="check {$isSelected(type) ? 'block' : 'hidden'}">
								<Check class="size-4" />
							</div>
							{type}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}

	<div class="flex items-center justify-center">
		<label class="pr-4 leading-none text-white" for="level-requirement" id="level-requirement-label"
			>Level Requirement
		</label>
		<button
			use:melt={$root}
			class="flex size-7 appearance-none items-center justify-center
            rounded-lg bg-white text-magnum-600 shadow hover:opacity-75"
			id="checkbox"
			aria-labelledby="level-requirement-label"
		>
			{#if $isChecked}
				<Check class="size-5" />
			{/if}
		</button>
		<input type="checkbox" bind:checked={levelRequirementEnabled} use:melt={$input} />
	</div>

	<button type="submit">Confirm</button>
</form>

<style lang="postcss">
	.check {
		position: absolute;
		left: theme(spacing.2);
		top: 50%;
		z-index: theme(zIndex.20);
		translate: 0 calc(-50% + 1px);
		color: theme(colors.magnum.700);
	}
	/* Set your monospace font (Required to have the editor working correctly!) */
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
		color: white;
	}

	button {
		--w: 2.75rem;
		--padding: 0.125rem;
		width: var(--w);
	}

	.thumb {
		--size: 1.25rem;
		width: var(--size);
		height: var(--size);
		transform: translateX(var(--padding));
	}
</style>
