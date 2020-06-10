import omit from "lodash.omit";
import { RawTokenObject, Token, TokenObject } from "../types";

export const createToken = <T extends TokenObject = {}>(
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
		...((value as RawTokenObject<T> & {
			extends: Token<T>;
		}).extends?.value || {}),
		...omit((value as never) as object, "extends"),
	} as RawTokenObject<T>,
});
