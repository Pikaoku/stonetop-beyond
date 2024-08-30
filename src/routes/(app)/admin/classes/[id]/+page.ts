import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { supabase } = await parent();

	const currentClass = (await supabase.from('class').select('*').eq('id', params.id).single())
		?.data;

	return {
		currentClass: currentClass
	};
};
