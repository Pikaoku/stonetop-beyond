import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { supabase } = await parent();

	const move = (await supabase.from('move').select('*'))?.data ?? [];
	const classes = (await supabase.from('class').select('*'))?.data ?? [];

	return {
		move, classes
	};
};
