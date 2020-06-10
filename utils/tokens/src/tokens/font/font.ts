import { createToken } from "../../utils";
import { FontObject } from "./types";

export const sans = createToken<FontObject>(
	"Sans Serif",
	{
		family: "sans-serif",
		size: 16,
		weight: "normal",
		style: "normal",
	},
	"Sans Serif"
);
