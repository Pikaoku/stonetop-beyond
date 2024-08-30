import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
	const { supabase, user } = await parent();

	if (!user) {
		return { profile: null };
	}

	const { data: profile } = await supabase
		.from('profile')
		.select('display_name,player_name,id')
		.match({ id: user.id })
		.single();
	return { profile };
};
