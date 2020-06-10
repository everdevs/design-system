import { createToken } from "../../utils";
import { light } from "../shade";
import { ShadowObject } from "./types";

export const m = createToken<ShadowObject>(
	"Shadow M",
	{
		offset: [0, 16],
		blur: 18,
		spread: 0,
		color: light,
	},
	"Medium shadow"
);
