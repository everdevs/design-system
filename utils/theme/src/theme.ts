import {
	colorBlack as black,
	colorGreen as green,
	colorGrey as grey,
	colorRed as red,
	colorWhite as white,
} from "@evernest/tokens";
import { Breakpoints, Colors, Mediaqueries, Palette, Spaces, Theme } from "./types";

const palette: Palette = {
	red,
	green,
	black,
	white,
	grey,
};

const colors: Colors = {
	primary: black,
	secondary: white,
	tertiary: grey,
	lightText: white,
	darkText: black,
};

export const spaces: Spaces = {
	xs: {
		xxs: 8,
		xs: 16,
		s: 24,
		m: 32,
		l: 40,
		xl: 48,
		xxl: 80,
	},
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
	xs: 0,
	s: 320,
	m: 640,
	l: 960,
	xl: 1280,
};

export const mq: Mediaqueries = Object.entries(breakpoints).reduce(
	(previousValue, [key, value]: [keyof Breakpoints, number]) => ({
		...previousValue,
		[key]: `(min-width: ${value}px)`,
	}),
	{}
) as Mediaqueries;

export const theme: Theme = {
	palette,
	colors,
	spaces,
	breakpoints,
	mq,
};
