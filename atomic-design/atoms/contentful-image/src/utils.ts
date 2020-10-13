import { stringify as queryStringify } from "query-string";
import { AssetOptions } from "./types";

export const getImageUrl = (url: string, options: AssetOptions): string =>
	`${url}?${queryStringify(options)}`;
