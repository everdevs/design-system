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
