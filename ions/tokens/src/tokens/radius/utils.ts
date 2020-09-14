import { RadiusObject, RadiusType } from "./types";
import { percent, px } from "../../utils";
import { Token } from "../../types";

export const getRadius = ({ value: { value, type } }: Token<RadiusObject>): string => {
	switch (type) {
		case RadiusType.percent:
			return value.map(v => percent(v)).join(" ");
		case RadiusType.px:
		default:
			return value.map(v => px(v)).join(" ");
	}
};
