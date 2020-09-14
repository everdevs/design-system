import { createToken } from "../../utils";
import { ColorObject, ColorType } from "../color";

export const shadeLight = createToken<ColorObject>(
	"Shade Light",
	{ type: ColorType.rgb, value: [0, 0, 0, 0.13] },
	"Light shade"
);
