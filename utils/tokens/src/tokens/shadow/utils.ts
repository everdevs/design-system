import { Token } from "../../types";
import { ShadowObject } from "./types";
import { px } from "../../utils";
import { getColor } from "../color";

export const getBoxShadow = ({ value }: Token<ShadowObject>) =>
	`${value.offset.map(x => px(x)).join(" ")} ${px(value.blur)} ${px(value.spread)} ${getColor(
		value.color
	)}`;
