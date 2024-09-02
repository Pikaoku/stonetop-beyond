import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { supabase } = await parent();

	const classes = (await supabase.from('class').select('*'))?.data ?? [];

	return {
		classes
	};
};
