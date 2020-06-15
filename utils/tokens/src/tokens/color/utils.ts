import { ColorArray, ColorObject, ColorType } from "./types";
import { Token } from "../../types";

export const hsl = ([h, s, l, a = 1]: ColorArray): string =>
	a >= 1 ? `hsl(${h},${s}%,${l}%)` : `hsla(${h},${s}%,${l}%,${a})`;

export const rgb = ([r, g, b, a = 1]: ColorArray): string =>
	a >= 1 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;

export const getColor = ({ value: { value, type } }: Token<ColorObject>): string => {
	switch (type) {
		case ColorType.hsl:
			return hsl(value as ColorArray);
		case ColorType.rgb:
			return rgb(value as ColorArray);
		case ColorType.hex:
		default:
			return value as string;
	}
};
