import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const player_name = formData.get('player_name') as string;

		const {
			error,
			data: { user }
		} = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error);
			return fail(500, {
				errorMessage: error.message
			});
		} else if (user) {
			await supabase
				.from('profile')
				.upsert({ id: user.id, player_name, email, display_name: player_name });
			redirect(303, '/app');
		}
	}
};
