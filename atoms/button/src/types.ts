import React from "react";
import { Theme } from "@evernest/theme";
import { Token, button } from "@evernest/tokens";

export enum Size {
	small = "small",
	medium = "medium",
}

export type ButtonAttributes = Pick<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"className" | "disabled" | "name" | "type"
>;

export interface ButtonProps extends ButtonAttributes {
	/** The size of the button */
	size?: Size;
	/** The theme is injected via a ThemeProvider */
	theme?: Theme;
	/** A custom button-token */
	token?: Token<button.ButtonObject>;
}
