<script lang="ts">
	import { getAttributeValue, type Character } from '$lib/helps/character';
	import { onMount } from 'svelte';
	import StatPair from './StatPair.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import type { Tables } from '$lib/types/db';
	import { writable } from 'svelte/store';

	const checkDebility = (debilityName: string) => (status: Tables<'pool'>) =>
		status.label === debilityName && status.value === 1;

	const debilities = writable<Tables<'pool'>[]>([]);
	$: dazed = $debilities.some(checkDebility('dazed'));
	$: weakened = $debilities.some(checkDebility('weakened'));
	$: miserable = $debilities.some(checkDebility('miserable'));

	$: getDebilities = async () => {
		const response = await ($page.data as PageData).supabase
			.from('pool')
			.select('*')
			.eq('character_id', $page.params.id)
			.eq('type', 'status');
		const statuses = response.data;
		if (statuses) {
			debilities.set(statuses);
		}
	};

	const updateDebility = async (label: string, value: 1 | 0) => {
		debilities.update(($debilities) => {
			const existingId = $debilities.find((debility) => debility.label === label)?.id;
			return [
				...$debilities.filter((debility) => debility.label !== label),
				{
					id: existingId ?? -1,
					character_id: parseInt($page.params.id),
					label,
					type: 'status' as const,
					value,
					max: 1
				}
			];
		});
		const existingId = $debilities.find((debility) => debility.label === label)?.id;
		const response = await ($page.data as PageData).supabase.from('pool').upsert({
			id: existingId,
			character_id: parseInt($page.params.id),
			label,
			type: 'status',
			value
		});
		if (response.error) {
			console.error(response.error);
		} else {
			getDebilities();
		}
	};

	onMount(() => getDebilities());

	export let character: Character;
</script>

<div class="grid grid-cols-3 gap-3 border-white-off">
	<StatPair
		topLabel="strength"
		topValue={getAttributeValue(character, 'strength')}
		bottomLabel="dexterity"
		bottomValue={getAttributeValue(character, 'dexterity')}
		debility="weakened"
		debilitated={weakened}
		on:click={() => updateDebility('weakened', weakened ? 0 : 1)}
	/>
	<StatPair
		topLabel="intelligence"
		topValue={getAttributeValue(character, 'intelligence')}
		bottomLabel="wisdom"
		bottomValue={getAttributeValue(character, 'wisdom')}
		debility="dazed"
		debilitated={dazed}
		on:click={() => updateDebility('dazed', dazed ? 0 : 1)}
	/>
	<StatPair
		topLabel="constitution"
		topValue={getAttributeValue(character, 'constitution')}
		bottomLabel="charisma"
		bottomValue={getAttributeValue(character, 'charisma')}
		debility="miserable"
		debilitated={miserable}
		on:click={() => updateDebility('miserable', miserable ? 0 : 1)}
	/>
</div>
