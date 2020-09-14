import { ColorObject, ColorType, createToken, getBoxShadow, ShadowObject } from "../src";

test("getBoxShadow returns a boxShadow color from a token", () => {
	const expected = "10px 5px 5px 5px rgba(0,0,0,0.5)";
	const shade = createToken<ColorObject>("Shade", { type: ColorType.rgb, value: [0, 0, 0, 0.5] });
	const shadow = createToken<ShadowObject>("Shadow", {
		offset: [10, 5],
		blur: 5,
		spread: 5,
		color: shade,
	});
	const actual = getBoxShadow(shadow);
	expect(actual).toEqual(expected);
});
