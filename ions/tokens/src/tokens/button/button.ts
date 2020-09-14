import { colorBlack, colorGrey, colorWhite } from "../color";
import { radiusM as radius } from "../radius";
import { shadowM as shadow } from "../shadow";
import { fontSans as font } from "../font";
import { createToken } from "../../utils";
import { ButtonObject } from "./types";
import { Token } from "../../types";

export const buttonBase = createToken<ButtonObject>(
	"Button Base",
	{
		spaces: [20, 24],
		colors: {
			background: colorGrey,
			text: colorBlack,
		},
		font,
		radius,
		shadow,
	},
	"Button"
);

export const buttonS: Token<ButtonObject> = createToken<ButtonObject>(
	"Button S",
	{
		extends: buttonBase,
		spaces: [10, 24],
	},
	"Small Button"
);

export const buttonM = createToken<ButtonObject>(
	"Button M",
	{
		extends: buttonBase,
	},
	"Medium Button"
);

export const buttonSecondary = createToken<ButtonObject>(
	"Button Secondary",
	{
		extends: buttonBase,
		colors: {
			background: colorWhite,
			text: colorBlack,
		},
	},
	"Secondary Button"
);

export const buttonPrimary = createToken<ButtonObject>(
	"Button Primary",
	{
		extends: buttonBase,
		colors: {
			background: colorBlack,
			text: colorWhite,
		},
	},
	"Primary Button"
);

export const buttonSecondaryS = createToken<ButtonObject>(
	"Button Secondary S",
	{
		extends: buttonS,
		colors: {
			background: colorWhite,
			text: colorBlack,
		},
	},
	"Small Secondary Button"
);

export const buttonPrimaryS = createToken<ButtonObject>(
	"Button Primary S",
	{
		extends: buttonS,
		colors: {
			background: colorBlack,
			text: colorWhite,
		},
	},
	"Small Primary Button"
);
