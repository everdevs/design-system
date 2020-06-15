import { Except } from "type-fest";

export interface TokenObject<T = Record<string, unknown>> {
	extends?: Token<T>;
}

export type RawTokenObject<T> = Except<T & TokenObject, "extends">;

export interface TokenBase {
	name: string;
	description?: string;
}

export interface Token<T extends TokenObject = Record<string, unknown>> extends TokenBase {
	value: RawTokenObject<T>;
}
