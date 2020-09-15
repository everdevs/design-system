import React from "react";
import { PropsWithTheme } from "@evernest/theme";

export type HeaderLinkElement = HTMLAnchorElement;

export interface StyledHeaderLinkProps
	extends PropsWithTheme<HeaderLinkElement>,
		React.AnchorHTMLAttributes<HeaderLinkElement> {
	/** Add types */
}

export interface HeaderLinkProps extends HeaderLinkElement {
	/** Add types */
}
