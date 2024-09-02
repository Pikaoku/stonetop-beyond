import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { supabase } = await parent();

	const currentMove = (await supabase.from('move').select('*').eq('id', params.id).single())
		?.data;

	return {
		currentMove: currentMove
	};
};
