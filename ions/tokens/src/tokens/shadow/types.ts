import { RawTokenObject, Token, TokenObject } from "../../types";
import { ColorObject } from "../color/types";

export interface ShadowObject extends TokenObject {
	offset: [number, number];
	blur: number;
	spread: number;
	color: Token<ColorObject>;
}

export interface RawShadowObject extends TokenObject {
	offset: [number, number];
	blur: number;
	spread: number;
	color: RawTokenObject<ColorObject>;
}
