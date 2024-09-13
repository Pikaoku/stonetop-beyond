import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			return fail(401, {
				incorrect: true,
				errorMessage: 'Email or password were incorrect. Try again.'
			});
		} else {
			return redirect(303, '/app');
		}
	}
};
