import { extractShadow, getBoxShadow, shadowM } from "@evernest/tokens";
import { Shadow } from "./types";

export const shadow: Shadow = {
	medium: {
		token: extractShadow(shadowM),
		css: getBoxShadow(shadowM),
	},
};
