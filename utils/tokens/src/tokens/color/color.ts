import { createToken } from "../../utils";
import { ColorObject, ColorType } from "./types";

export const colorBlack = createToken<ColorObject>(
	"Black",
	{ type: ColorType.hex, value: "#000000" },
	"Evernest Black"
);

export const colorWhite = createToken<ColorObject>(
	"Black",
	{ type: ColorType.hex, value: "#FFFFFF" },
	"White"
);

export const colorGrey = createToken<ColorObject>(
	"Grey",
	{ type: ColorType.hex, value: "#69758F" },
	"Evernest Grey"
);

export const colorGrey2 = createToken<ColorObject>(
	"Grey 2",
	{ type: ColorType.hex, value: "#B3BAC8" },
	"Evernest Grey 2"
);

export const colorBackgroundGrey = createToken<ColorObject>(
	"Background Grey",
	{ type: ColorType.hex, value: "#F8F9FD" },
	"Evernest Background Grey"
);

export const colorBrightGrey = createToken<ColorObject>(
	"Bright Grey",
	{ type: ColorType.hex, value: "#E1E4EA" },
	"Evernest Bright Grey"
);

export const colorBrightGrey2 = createToken<ColorObject>(
	"Bright Grey 2",
	{ type: ColorType.hex, value: "#E5E5E5" },
	"Evernest Bright Grey 2"
);

export const colorRed = createToken<ColorObject>(
	"Red",
	{ type: ColorType.hex, value: "#D50808" },
	"Evernest Red"
);

export const colorGreen = createToken<ColorObject>(
	"Green",
	{ type: ColorType.hex, value: "#25BF48" },
	"Evernest Green"
);
