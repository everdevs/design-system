import { createToken } from "../../utils";
import { RadiusObject, RadiusType } from "./types";

export const s = createToken<RadiusObject>(
	"Radius S",
	{
		type: RadiusType.px,
		value: [3],
	},
	"Small radius"
);

export const m = createToken<RadiusObject>(
	"Radius M",
	{
		type: RadiusType.px,
		value: [10],
	},
	"Medium radius"
);

export const l = createToken<RadiusObject>(
	"Radius L",
	{
		type: RadiusType.px,
		value: [20],
	},
	"Large radius"
);
