import { TokenObject } from "../../types";

export enum RadiusType {
	percent,
	px,
}

export type RadiusValue =
	| [number]
	| [number, number]
	| [number, number, number]
	| [number, number, number];

export interface RadiusObject extends TokenObject {
	type: RadiusType;
	value: RadiusValue;
}
