/**
 * Converts a given value to a float from 0 to 1.
 * The `max` parameter is used to determine the progress while 0 is always the starting point.
 * @param value
 * @param max
 * @example
 *   const opacity = toOpacityValue(5, 10); // 0.5
 * @example
 *   const opacity = toOpacityValue(10, 10); // 1
 * @example
 *   const opacity = toOpacityValue(0, 10); // 0
 */
export const toOpacityValue = (value: number, max: number): number => {
	return value === max || max === 0 ? 1 : value === 0 ? 0 : Math.min(value, max) / max;
};
