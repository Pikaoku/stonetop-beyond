import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const move_id = formData.get('move_id') as string;

		console.log('move_id', move_id);

		throw new Error('fun');
	}
};
