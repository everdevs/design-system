import { createToken } from "../../utils";
import { GridObject } from "./types";

export const padding = createToken<GridObject>(
	"Grid Padding",
	{
		value: 24,
	},
	"Inner space of grid-columns"
);

export const gutter = createToken<GridObject>(
	"Grid Gutter",
	{
		value: 24,
	},
	"Outer space of grid-columns"
);

export const columnsS = createToken<GridObject>(
	"Grid Column Count S",
	{
		value: 4,
	},
	"Number of columns for the 'S' viewport"
);

export const columnsM = createToken<GridObject>(
	"Grid Column Count M",
	{
		value: 8,
	},
	"Number of columns for the 'M' viewport"
);

export const columnsL = createToken<GridObject>(
	"Grid Column Count L",
	{
		value: 12,
	},
	"Number of columns for the 'L' viewport"
);
