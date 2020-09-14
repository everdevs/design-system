import { TokenObject } from "../../types";
import { ColorType, ColorValue } from "../color";

export interface ShadeObject extends TokenObject {
	type: ColorType;
	value: ColorValue;
}
