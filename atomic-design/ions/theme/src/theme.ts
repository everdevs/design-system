import {
	colorBackgroundGrey,
	colorBlack,
	colorBlue,
	colorBrandGreen,
	colorBrightGrey,
	colorDarkGrey,
	colorGreen,
	colorGrey,
	colorRed,
	colorWhite,
	extractColor,
	getColor,
} from "@evernest/tokens";
import { Breakpoints, Colors, GridConfig, Mediaqueries, Palette, Spaces, Theme } from "./types";
import { tokens } from "./tokens";

const palette: Palette = {
	red: {
		token: extractColor(colorRed),
		css: getColor(colorRed),
	},
	green: {
		token: extractColor(colorGreen),
		css: getColor(colorGreen),
	},
	blue: {
		token: extractColor(colorBlue),
		css: getColor(colorBlue),
	},
	black: {
		token: extractColor(colorBlack),
		css: getColor(colorBlack),
	},
	white: {
		token: extractColor(colorWhite),
		css: getColor(colorWhite),
	},
	grey: {
		token: extractColor(colorGrey),
		css: getColor(colorGrey),
	},
	darkGrey: {
		token: extractColor(colorDarkGrey),
		css: getColor(colorDarkGrey),
	},
	brightGrey: {
		token: extractColor(colorBrightGrey),
		css: getColor(colorBrightGrey),
	},
	backgroundGrey: {
		token: extractColor(colorBackgroundGrey),
		css: getColor(colorBackgroundGrey),
	},
	brandGreen: {
		token: extractColor(colorBrandGreen),
		css: getColor(colorBrandGreen),
	},
};

const colors: Colors = {
	primary: palette.black,
	secondary: palette.white,
	tertiary: palette.grey,
	lightText: palette.white,
	darkText: palette.black,
};

export const spaces: Spaces = {
	xxxxs: 4,
	xxxs: 8,
	xxs: 16,
	xs: 24,
	s: 32,
	m: 40,
	l: 48,
	xl: 64,
	xxl: 80,
	xxxl: 120,
	xxxxl: 184,
};

const gutter = {
	s: 8,
	m: 8,
	l: 12,
};
const gridPadding = {
	s: 16,
	m: 24,
	l: 24,
};
const padding = {
	s: 0,
	m: 0,
	l: 0,
};

export const breakpoints: Breakpoints = {
	s: 320,
	m: 768,
	l: 1200,
	xl: 1200,
};

export const getMediaqueries = (b: Breakpoints) =>
	Object.entries(b).reduce(
		(previousValue, [key, value]) => ({
			...previousValue,
			[key]: `(min-width: ${value}px)`,
		}),
		{}
	) as Mediaqueries;

export const mq: Mediaqueries = getMediaqueries(breakpoints);

export const grid: GridConfig = {
	gutter,
	gridPadding,
	padding,
	maxWidth: breakpoints.xl - (gridPadding.l + gutter.l) * 2,
	colSpan: {
		s: 4,
		m: 8,
		l: 12,
	},
};

export const layout = {
	header: {
		height: {
			s: 72,
			m: 72,
			l: 96,
		},
	},
};

export const theme: Theme = {
	layout,
	palette,
	colors,
	spaces,
	breakpoints,
	mq,
	grid,
	tokens,
};
