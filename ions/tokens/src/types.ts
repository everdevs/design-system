import { Except } from "type-fest";

export type EmptyToken = Record<string, unknown>;

export interface TokenObject<T = EmptyToken> {
	extends?: Token<T>;
}

export type RawTokenObject<T> = Except<T & TokenObject, "extends">;

export interface TokenBase {
	name: string;
	description?: string;
}

export interface Token<T extends TokenObject = EmptyToken> extends TokenBase {
	value: RawTokenObject<T>;
}
