import { Token } from "@evernest/tokens";
import { color } from "@evernest/tokens";

export interface Palette {
	red: Token<color.ColorObject>;
	green: Token<color.ColorObject>;
	black: Token<color.ColorObject>;
	white: Token<color.ColorObject>;
	grey: Token<color.ColorObject>;
}

export interface Colors {
	primary: Token<color.ColorObject>;
	secondary: Token<color.ColorObject>;
	tertiary: Token<color.ColorObject>;
	lightText: Token<color.ColorObject>;
	darkText: Token<color.ColorObject>;
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
