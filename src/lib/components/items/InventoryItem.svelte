<script lang="ts">
	import type { Tables } from '$lib/types/db';
	import cx from 'classnames';
	import { Trash, Hand, Plus, Minus } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import ChargesDots from '../ChargesDots.svelte';
	import { createMutation, useQueryClient } from '@tanstack/svelte-query';
	import { character } from '../../../routes/(app)/app/characters/[id]/stores';
	import { supabase } from '$lib/helpers/contextuals';

	export let item: Tables<'pack_item'> & { item: Tables<'item'> | null };
	export let expanded = false;

	let qc = useQueryClient();

	$: removeMutation = createMutation({
		mutationKey: ['character', $character.id, 'pack', item.id, 'remove'],
		mutationFn: async () => await $supabase.from('pack_item').delete().eq('id', item.id),
		onSuccess: () => qc.invalidateQueries({ queryKey: ['character', $character.id, 'pack'] })
	});

	$: hasCharges = item.item?.charges || item.uses;
	$: hasExpandedContent = item.item?.instructions || item.item?.traits;
</script>

<div
	class={cx(
		'rounded-lg',
		{
			'bg-black-off/5': expanded,
			'bg-transparent': !expanded
		},
		'flex flex-col gap-1 justify-normal p-2',
		'transition-all duration-150 ease-out'
	)}
>
	<button
		on:click
		class={cx(
			'text-left rounded px-2',
			' scale-100 active:scale-y-90 active:scale-x-95 transition-transform duration-75',
			'flex flex-row items-center justify-between'
		)}
		><span>{item.item?.name}{item.item?.qualifier ? `, ${item.item?.qualifier}` : ''} </span>
		{#if hasCharges}
			<ChargesDots max={item.item?.charges} current={item.uses} />
		{/if}
	</button>
	{#if expanded}
		<div class="flex flex-col gap-1">
			{#if hasExpandedContent}
				<div class="px-2">
					({[item.item?.traits, item.item?.instructions].filter((x) => !!x).join(', ')})
				</div>
			{/if}
			{#if hasCharges}
				<div class="flex flex-row gap-2">
					<button
						class="text-center bg-blue-400 rounded font-medium font-sans px-2 py-1 flex flex-row gap-2 items-center w-full"
						><Minus class="mx-auto" /></button
					>
					<button
						class="text-center bg-green-400 rounded font-medium font-sans px-2 py-1 flex flex-row gap-2 items-center w-full"
						><Plus class="mx-auto" />
					</button>
				</div>
			{/if}
			<div class="flex flex-row gap-2">
				<button
					on:click={() => $removeMutation.mutate()}
					class="bg-red-400 rounded font-medium font-sans px-2 py-1 flex flex-row gap-2 items-center w-full"
					><Trash /> Remove</button
				>
			</div>
		</div>
	{/if}
</div>
