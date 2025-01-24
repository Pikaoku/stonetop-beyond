import type { PageLoad } from './$types';

export const load: PageLoad = async (request) => {
	const { supabase, character } = await request.parent();

	if (character) {
		const levelUpMoveOptions = await supabase
			.from('move')
			.select('*')
			.eq('type', 'class')
			.eq('class_id', character?.class_id)
			.not('id', 'in', `(${(character?.moves?.map((move) => move.id) ?? []).join(',')})`)
			.order('name')
			.order('level_requirement');
		return { moveOptions: levelUpMoveOptions.data };
	} else {
		return { moveOptions: [] };
	}
};
