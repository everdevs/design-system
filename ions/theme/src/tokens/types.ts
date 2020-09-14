import { RawShadowObject } from "@evernest/tokens";
import { ThemeValue } from "../types";

export interface Shadow {
	medium: ThemeValue<RawShadowObject>;
}

export interface Tokens {
	shadow: Shadow;
}
