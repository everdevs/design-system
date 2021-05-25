import { css, Global } from "@emotion/react";
import React from "react";
import { normalize } from "@evernest/normalize-css";

export const cssNormalize = css`
	${normalize};
`;

export const globalStyles = css`
	:root {
		--font-face-sans-serif: sans-serif;
		--font-face-serif: serif;
	}
	html {
		font-family: var(--font-face-sans-serif);
	}
	body {
		min-height: 100vh;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	a {
		color: currentColor;
	}
`;

export const Normalize = () => <Global styles={cssNormalize} />;

export const GlobalStyles = () => <Global styles={globalStyles} />;
