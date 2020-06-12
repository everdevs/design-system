import { createToken } from "../../utils";
import { shadeLight } from "../shade";
import { ShadowObject } from "./types";

export const shadowM = createToken<ShadowObject>(
	"Shadow M",
	{
		offset: [0, 16],
		blur: 18,
		spread: 0,
		color: shadeLight,
	},
	"Medium shadow"
);
