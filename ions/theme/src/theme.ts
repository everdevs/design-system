import {
	colorBlack,
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
};

const colors: Colors = {
	primary: palette.black,
	secondary: palette.white,
	tertiary: palette.grey,
	lightText: palette.white,
	darkText: palette.black,
};

export const spaces: Spaces = {
	s: {
		xxs: 8,
		xs: 16,
		s: 24,
		m: 32,
		l: 40,
		xl: 48,
		xxl: 80,
	},
	m: {
		xxs: 8,
		xs: 16,
		s: 24,
		m: 32,
		l: 40,
		xl: 48,
		xxl: 80,
	},
	l: {
		xxs: 8,
		xs: 16,
		s: 24,
		m: 32,
		l: 40,
		xl: 48,
		xxl: 80,
	},
	xl: {
		xxs: 8,
		xs: 16,
		s: 24,
		m: 32,
		l: 40,
		xl: 48,
		xxl: 80,
	},
};

export const breakpoints: Breakpoints = {
	s: 320,
	m: 768,
	l: 1080,
	xl: 1080,
};

export const mq: Mediaqueries = Object.entries(breakpoints).reduce(
	(previousValue, [key, value]: [keyof Breakpoints, number]) => ({
		...previousValue,
		[key]: `(min-width: ${value}px)`,
	}),
	{}
) as Mediaqueries;

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

export const grid: GridConfig = {
	gutter,
	gridPadding,
	padding,
	maxWidth: breakpoints.xl,
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
