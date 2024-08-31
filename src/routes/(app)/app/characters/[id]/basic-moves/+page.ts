import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { supabase } = await parent();
	const basicMoves = await supabase.from('move').select('*').eq('type', 'basic').order('name');
	return {
		moves: basicMoves.data
	};
};
