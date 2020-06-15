import { px, percent } from "../src";

test("px add px to a number", () => {
	const expected = "10px";
	const actual = px(10);
	expect(actual).toEqual(expected);
});

test("px returns 0 without unit", () => {
	const expected = "0";
	const actual = px(0);
	expect(actual).toEqual(expected);
});

test("percent add % to a number", () => {
	const expected = "10%";
	const actual = percent(10);
	expect(actual).toEqual(expected);
});

test("percent returns 0 without unit", () => {
	const expected = "0";
	const actual = percent(0);
	expect(actual).toEqual(expected);
});
