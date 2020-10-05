export const toProgress = (value: number, max: number): number => {
	return value === max || max === 0 ? 1 : value === 0 ? 0 : Math.min(value, max) / max;
};
