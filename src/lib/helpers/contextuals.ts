import { page } from '$app/stores';
import type { Database } from '$lib/types/db';
import type { SupabaseClient } from '@supabase/supabase-js';
import { derived, type Readable } from 'svelte/store';

export const supabase: Readable<SupabaseClient<Database>> = derived(
	page,
	({ data }) => data?.supabase
);
 