import { ColorObject, RawTokenObject } from "@evernest/tokens";
import { Tokens } from "./tokens/types";
import React from "react";

export interface ThemeValue<T = unknown> {
	css: string;
	token: RawTokenObject<T>;
}

export interface Palette {
	red: ThemeValue<ColorObject>;
	green: ThemeValue<ColorObject>;
	blue: ThemeValue<ColorObject>;
	black: ThemeValue<ColorObject>;
	white: ThemeValue<ColorObject>;
	grey: ThemeValue<ColorObject>;
	darkGrey: ThemeValue<ColorObject>;
	brightGrey: ThemeValue<ColorObject>;
	backgroundGrey: ThemeValue<ColorObject>;
	brandGreen: ThemeValue<ColorObject>;
}

export interface Colors {
	primary: ThemeValue<ColorObject>;
	secondary: ThemeValue<ColorObject>;
	tertiary: ThemeValue<ColorObject>;
	lightText: ThemeValue<ColorObject>;
	darkText: ThemeValue<ColorObject>;
}

export interface Spaces {
	xxxxs: number;
	xxxs: number;
	xxs: number;
	xs: number;
	s: number;
	m: number;
	l: number;
	xl: number;
	xxl: number;
	xxxl: number;
	xxxxl: number;
}

export interface Sizes {
	s: number;
	m: number;
	l: number;
}

export interface GridConfig {
	gutter: Sizes;
	gridPadding: Sizes;
	padding: Sizes;
	maxWidth: number;
	colSpan: Sizes;
	debug?: boolean;
}

export interface Breakpoints {
	s: number;
	m: number;
	l: number;
	xl: number;
}

export interface Mediaqueries {
	s: string;
	m: string;
	l: string;
	xl: string;
}
export interface HeaderHeight {
	s: number;
	m: number;
	l: number;
}

export interface HeaderLayout {
	height: HeaderHeight;
}
export interface Layout {
	header: HeaderLayout;
}

export interface Theme {
	layout: Layout;
	palette: Palette;
	colors: Colors;
	spaces: Spaces;
	breakpoints: Breakpoints;
	mq: Mediaqueries;
	tokens: Tokens;
	grid: GridConfig;
}

export interface PropsWithTheme<T = HTMLDivElement> extends React.HTMLAttributes<T> {
	/** The theme is injected via a ThemeProvider */
	theme?: Theme;
}
