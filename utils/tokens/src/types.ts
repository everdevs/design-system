export interface TokenObject<T = {}> {
	extends?: Token<T>;
}

export type RawTokenObject<T> = Omit<T, "extends">;

export interface TokenBase {
	name: string;
	description?: string;
}

export interface Token<T extends TokenObject = {}> extends TokenBase {
	value: RawTokenObject<T>;
}
