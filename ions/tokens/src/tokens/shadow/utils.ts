import { RawTokenObject, Token } from "../../types";
import { RawShadowObject, ShadowObject } from "./types";
import { px } from "../../utils";
import { extractColor, getColor } from "../color";

export const extractShadow = ({
	value: { offset, blur, spread, color },
}: Token<ShadowObject>): RawTokenObject<RawShadowObject> => ({
	offset,
	blur,
	spread,
	color: extractColor(color),
});

export const getBoxShadow = ({ value }: Token<ShadowObject>) =>
	`${value.offset.map(x => px(x)).join(" ")} ${px(value.blur)} ${px(value.spread)} ${getColor(
		value.color
	)}`;
