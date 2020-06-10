import { Token, TokenObject } from "../../types";
import { ColorObject } from "../color/types";

export interface ShadowObject extends TokenObject {
	offset: [number, number];
	blur: number;
	spread: number;
	color: Token<ColorObject>;
}
