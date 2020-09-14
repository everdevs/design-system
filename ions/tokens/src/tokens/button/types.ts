import { Token, TokenObject } from "../../types";
import { ColorObject } from "../color";
import { SpaceValue } from "../space";
import { FontObject } from "../font";
import { ShadowObject } from "../shadow";
import { RadiusObject } from "../radius";

export interface ButtonObject extends TokenObject {
	spaces: SpaceValue;
	colors: {
		background: Token<ColorObject>;
		text: Token<ColorObject>;
	};
	font: Token<FontObject>;
	radius: Token<RadiusObject>;
	shadow: Token<ShadowObject>;
}

export enum Size {
	small = "small",
	medium = "medium",
	large = "large",
}

export enum Variation {
	primary = "primary",
	secondary = "secondary",
	tertiary = "tertiary",
	default = "default",
}
