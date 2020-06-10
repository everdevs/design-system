import { createToken } from "../../utils";
import { ColorObject, ColorType } from "./types";

export const black = createToken<ColorObject>(
	"Black",
	{ type: ColorType.hex, value: "#000000" },
	"Evernest Black"
);

export const white = createToken<ColorObject>(
	"Black",
	{ type: ColorType.hex, value: "#FFFFFF" },
	"White"
);

export const grey = createToken<ColorObject>(
	"Grey",
	{ type: ColorType.hex, value: "#69758F" },
	"Evernest Grey"
);

export const grey2 = createToken<ColorObject>(
	"Grey 2",
	{ type: ColorType.hex, value: "#B3BAC8" },
	"Evernest Grey 2"
);

export const backgroundGrey = createToken<ColorObject>(
	"Background Grey",
	{ type: ColorType.hex, value: "#F8F9FD" },
	"Evernest Background Grey"
);

export const brightGrey = createToken<ColorObject>(
	"Bright Grey",
	{ type: ColorType.hex, value: "#E1E4EA" },
	"Evernest Bright Grey"
);

export const brightGrey2 = createToken<ColorObject>(
	"Bright Grey 2",
	{ type: ColorType.hex, value: "#E5E5E5" },
	"Evernest Bright Grey 2"
);

export const red = createToken<ColorObject>(
	"Red",
	{ type: ColorType.hex, value: "#D50808" },
	"Evernest Red"
);

export const green = createToken<ColorObject>(
	"Green",
	{ type: ColorType.hex, value: "#25BF48" },
	"Evernest Green"
);
