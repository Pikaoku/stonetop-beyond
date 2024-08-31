import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = false;

export const load: LayoutLoad = async ({ parent, params }) => {
	const { supabase } = await parent();

	const characterId = params.id;

	if (!characterId) {
		return { status: 404, error: new Error('Character not found') };
	}

	const character = (
		await supabase
			.from('character')
			.select(
				'*, moves:character_move (*, move:move (*), stats:stat_line (*)), class (id, name, description)'
			)
			.eq('id', characterId)
			.single()
	).data;

	if (character) {
		return {
			character
		};
	} else {
		return { status: 404, error: new Error('Character not found') };
	}
};
