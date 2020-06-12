import { createToken } from "../../utils";
import { RadiusObject, RadiusType } from "./types";

export const radiusS = createToken<RadiusObject>(
	"Radius S",
	{
		type: RadiusType.px,
		value: [3],
	},
	"Small radius"
);

export const radiusM = createToken<RadiusObject>(
	"Radius M",
	{
		type: RadiusType.px,
		value: [10],
	},
	"Medium radius"
);

export const radiusL = createToken<RadiusObject>(
	"Radius L",
	{
		type: RadiusType.px,
		value: [20],
	},
	"Large radius"
);
