import { RadiusType, RadiusValue } from "./types";
import { percent, px } from "../../utils";

export const getRadius = (type: RadiusType, value: RadiusValue): string => {
	switch (type) {
		case RadiusType.percent:
			return value.map(v => percent(v)).join(" ");
		case RadiusType.px:
		default:
			return value.map(v => px(v)).join(" ");
	}
};
