import { Token, ColorObject } from "@evernest/tokens";

export interface Palette {
	red: Token<ColorObject>;
	green: Token<ColorObject>;
	black: Token<ColorObject>;
	white: Token<ColorObject>;
	grey: Token<ColorObject>;
}

export interface Colors {
	primary: Token<ColorObject>;
	secondary: Token<ColorObject>;
	tertiary: Token<ColorObject>;
	lightText: Token<ColorObject>;
	darkText: Token<ColorObject>;
}

export interface Space {
	xxs: number;
	xs: number;
	s: number;
	m: number;
	l: number;
	xl: number;
	xxl: number;
}

export interface Spaces {
	xs: Space;
	s: Space;
	m: Space;
	l: Space;
	xl: Space;
}

export interface Breakpoints {
	xs: number;
	s: number;
	m: number;
	l: number;
	xl: number;
}

export interface Mediaqueries {
	xs: string;
	s: string;
	m: string;
	l: string;
	xl: string;
}

export interface Theme {
	palette: Palette;
	colors: Colors;
	spaces: Spaces;
	breakpoints: Breakpoints;
	mq: Mediaqueries;
}
