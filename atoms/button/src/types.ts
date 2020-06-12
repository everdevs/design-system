import React from "react";
import { Theme } from "@evernest/theme";
import { Token, ButtonObject } from "@evernest/tokens";

export type ButtonAttributes = Pick<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"className" | "disabled" | "name" | "type"
>;

export interface ButtonProps extends ButtonAttributes {
	/** The theme is injected via a ThemeProvider */
	theme?: Theme;
	/** A custom button-token */
	token?: Token<ButtonObject>;
}
