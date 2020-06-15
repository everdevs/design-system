import { hsl, rgb, getColor, createToken, ColorType, ColorObject } from "../src";

test("hsl returns a color string from an array", () => {
	const expected = "hsl(0,100%,50%)";
	const actual = hsl([0, 100, 50]);
	expect(actual).toEqual(expected);
});

test("hsl removes alpha values >= 1", () => {
	const expected = "hsl(0,100%,50%)";
	const actual = hsl([0, 100, 50, 1]);
	expect(actual).toEqual(expected);
});

test("hsl handles alpha values < 1", () => {
	const expected = "hsla(0,100%,50%,0.5)";
	const actual = hsl([0, 100, 50, 0.5]);
	expect(actual).toEqual(expected);
});

test("rgb returns a color string from an array", () => {
	const expected = "rgb(255,0,0)";
	const actual = rgb([255, 0, 0]);
	expect(actual).toEqual(expected);
});

test("rgb removes alpha values >= 1", () => {
	const expected = "rgb(255,0,0)";
	const actual = rgb([255, 0, 0, 1]);
	expect(actual).toEqual(expected);
});

test("rgb handles alpha values < 1", () => {
	const expected = "rgba(255,0,0,0.5)";
	const actual = rgb([255, 0, 0, 0.5]);
	expect(actual).toEqual(expected);
});

test("getColor returns a hex color from a token", () => {
	const expected = "#F00";
	const red = createToken<ColorObject>("Red", { type: ColorType.hex, value: expected });
	const actual = getColor(red);
	expect(actual).toEqual(expected);
});

test("getColor returns a hsl color from a token", () => {
	const expected = "hsl(0,100%,50%)";
	const red = createToken<ColorObject>("Red", { type: ColorType.hsl, value: [0, 100, 50] });
	const actual = getColor(red);
	expect(actual).toEqual(expected);
});

test("getColor returns a rgb color from a token", () => {
	const expected = "rgb(255,0,0)";
	const red = createToken<ColorObject>("Red", { type: ColorType.rgb, value: [255, 0, 0] });
	const actual = getColor(red);
	expect(actual).toEqual(expected);
});

test("getColor returns a hsla color from a token", () => {
	const expected = "hsla(0,100%,50%,0.5)";
	const red = createToken<ColorObject>("Red", { type: ColorType.hsl, value: [0, 100, 50, 0.5] });
	const actual = getColor(red);
	expect(actual).toEqual(expected);
});

test("getColor returns a rgba color from a token", () => {
	const expected = "rgba(255,0,0,0.5)";
	const red = createToken<ColorObject>("Red", { type: ColorType.rgb, value: [255, 0, 0, 0.5] });
	const actual = getColor(red);
	expect(actual).toEqual(expected);
});
