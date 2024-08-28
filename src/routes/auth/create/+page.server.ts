import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const display_name = formData.get('display_name') as string;
		const player_name = formData.get('player_name') as string;

		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error);
			redirect(303, '/auth/issue');
		} else {
			console.log('supabase user', await supabase.auth.getUser());
			console.log('supabase user id', (await supabase.auth.getUser())?.data?.user?.id);

			const userId = (await supabase.auth.getUser())?.data?.user?.id;

			await supabase.from('profile').update({ display_name, player_name }).match({ id: userId });

			redirect(303, '/app');
		}
	}
};
