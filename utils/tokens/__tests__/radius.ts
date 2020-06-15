import { getRadius, createToken, RadiusObject, RadiusType } from "../src";

test("getColor returns a px radius from a token", () => {
	const expected = "10px";
	const s = createToken<RadiusObject>("Red", { type: RadiusType.px, value: [10] });
	const actual = getRadius(s);
	expect(actual).toEqual(expected);
});

test("getColor returns a percent radius from a token", () => {
	const expected = "50%";
	const s = createToken<RadiusObject>("Red", { type: RadiusType.percent, value: [50] });
	const actual = getRadius(s);
	expect(actual).toEqual(expected);
});
