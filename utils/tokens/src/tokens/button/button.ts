import { black, grey, white } from "../color";
import { m as radius } from "../radius";
import { m as shadow } from "../shadow";
import { sans } from "../font";
import { createToken } from "../../utils";
import { ButtonObject } from "./types";
import { Token } from "../../types";

export const base = createToken<ButtonObject>(
	"Button Base",
	{
		spaces: [20, 24],
		colors: {
			background: grey,
			text: black,
		},
		font: sans,
		radius,
		shadow,
	},
	"Button"
);

export const s: Token<ButtonObject> = createToken<ButtonObject>(
	"Button S",
	{
		extends: base,
		spaces: [10, 24],
	},
	"Small Button"
);

export const m = createToken<ButtonObject>(
	"Button M",
	{
		extends: base,
	},
	"Medium Button"
);

export const secondary = createToken<ButtonObject>(
	"Button Secondary",
	{
		extends: base,
		colors: {
			background: white,
			text: black,
		},
	},
	"Secondary Button"
);

export const primary = createToken<ButtonObject>(
	"Button Primary",
	{
		extends: base,
		colors: {
			background: black,
			text: white,
		},
	},
	"Primary Button"
);
