import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { supabase } = await parent();

	const response = await supabase
		.from('pack_item')
		.select(`*, item (*)`)
		.eq('character_id', params.id);

	if (response.error) {
		throw new Error(response.error.message);
	}

	if (response.data) {
		// Type filtered as not having null item properties
		const filtered = response.data.filter((item) => item.item !== null);

		return {
			items: filtered
		};
	} else {
		return {
			status: 404,
			error: new Error('Not found')
		};
	}
};
