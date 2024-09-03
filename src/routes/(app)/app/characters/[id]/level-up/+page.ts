import { getPoolValue } from '$lib/helpers/character';
import type { PageLoad } from './$types';

export const load: PageLoad = async (request) => {
	const { supabase, character } = await request.parent();

	if (character) {
		const levelUpMoveOptions = await supabase
			.from('move')
			.select('*')
			.eq('type', 'class')
			.eq('class_id', character?.class_id)
			.lte('level_requirement', getPoolValue(character, 'level') + 1)
			.order('name');
	}

	return { status: 404 };
};
