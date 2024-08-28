import type { Session } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {
	depends('supabase:db:notes');
	// get profile for current user
	const { data: profile } = await supabase
		.from('profile')
		.select('display_name,player_name,id')
		.match({ id: (session as Session).user.id })
		.single();
	const { data: notes } = await supabase.from('notes').select('id,note').order('id');
	return { notes: notes ?? [], profile };
};
