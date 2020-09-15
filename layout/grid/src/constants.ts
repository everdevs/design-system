export const NS = "grid";

export const GUTTER = `--${NS}-gutter`;
export const GRID_PADDING = `--${NS}-grid-padding`;
export const PADDING = `--${NS}-padding`;
export const COLSPAN = `--${NS}-colspan`;
export const COLCOUNT = `--${NS}-colcount`;

export const COLUMN = {
	ONE: `var(${COLCOUNT})`,
	TWO: `calc(var(${COLCOUNT}) / 2)`,
	THREE: `calc(var(${COLCOUNT}) / 3)`,
	FOUR: `calc(var(${COLCOUNT}) / 4)`,
};
