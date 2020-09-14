import { TokenObject } from "../../types";

export interface FontObject extends TokenObject {
	family: string;
	size: number;
	weight: "normal" | "bold";
	style: "normal" | "italic";
}
