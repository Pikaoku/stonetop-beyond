import type { Tables } from '../types/db';

export type Character = Tables<'character'> & {
	moves?:
		| (Tables<'character_move'> & {
				move?: Tables<'move'> | null;
				stats?: Tables<'stat_line'> | null;
		  })[]
		| null;
	pools?: Tables<'pool'>[] | null;
	class?: Partial<Tables<'class'>> | null;
};

export function getAttributeValue(character: Character, atr: keyof Tables<'stat_line'>) {
	return (character?.moves ?? []).reduce(
		(acc, move) => (!move.stats ? acc : acc + Number(move?.stats?.[atr])),
		0
	);
}

export const getPoolValue = (character: Character, poolLabel: string) => {
	return (character?.pools ?? []).find((pool) => pool.label === poolLabel)?.value ?? 0;
};

export const getMaxHP = (character: Character) => {
	return (character?.moves ?? []).reduce((acc, move) => {
		if (!move.stats) return acc;
		const atrValue = Number(move?.stats?.max_hp);
		if (isNaN(atrValue)) return acc;
		return acc > atrValue ? acc : atrValue;
	}, 0);
};
