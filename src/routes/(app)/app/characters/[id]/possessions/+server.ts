import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, params }) => {
	const charcaterId = params.id;
	if (false === !!charcaterId) {
		throw 'Character ID is required';
	}
	const pack = await locals.supabase.from('pack_item').select('*').eq('character_id', charcaterId);
	return json(pack);
};

export const DELETE: RequestHandler = async ({ url }) => {
	return new Response('Hello, world!' + url);
};
