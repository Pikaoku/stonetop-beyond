export const getXpCostForLevel = (level: number): number => {
	return level * 2 + 6;
};

export const getXpRemainingForLevel = (level: number, xp: number): number => {
	return getXpCostForLevel(level) - xp;
};

export const canLevelUp = (level: number, xp: number): boolean => {
	return getXpRemainingForLevel(level, xp) <= 0;
};
