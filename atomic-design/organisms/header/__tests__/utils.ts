import { toProgress } from "../src";

test("toProgress returns the progress of a value relative to it's maximum", () => {
	const value = 5;
	const max = 10;
	const progress = toProgress(value, max);
	expect(progress).toEqual(value / max);
});

test("toProgress returns 0 if value is 0", () => {
	const value = 0;
	const max = 10;
	const progress = toProgress(value, max);
	expect(progress).toEqual(0);
});

test("toProgress returns 1 if value equals maximum", () => {
	const value = 10;
	const max = 10;
	const progress = toProgress(value, max);
	expect(progress).toEqual(1);
});
