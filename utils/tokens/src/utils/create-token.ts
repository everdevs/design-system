import omit from "lodash.omit";
import { RawTokenObject, Token, TokenObject } from "../types";

export const createToken = <T extends TokenObject = Record<string, unknown>>(
	name: string,
	value:
		| (Partial<RawTokenObject<T>> & {
				extends: Token<T>;
		  })
		| RawTokenObject<T>,
	description?: string
): Token<T> => ({
	description,
	name,
	value: {
		...((value as TokenObject<T>).extends?.value || {}),
		...omit((value as never) as Record<string, unknown>, "extends"),
	} as RawTokenObject<T>,
});
