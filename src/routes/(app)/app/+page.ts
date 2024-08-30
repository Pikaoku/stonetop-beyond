import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { supabase, user } = await parent();
	const { data: characters } = await supabase
		.from('character')
		.select('*')
		.eq('owner_id', user?.id ?? '')
		.order('name');
	return { characters: characters ?? [] };
};
