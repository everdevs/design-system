import { TokenObject } from "../../types";

export enum ColorType {
	hsl,
	rgb,
	hex,
}
export type ColorArray = [number, number, number, number] | [number, number, number];
export type ColorValue = ColorArray | string;

export interface ColorObject extends TokenObject {
	type: ColorType;
	value: ColorValue;
}
