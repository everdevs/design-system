import { ThemeProvider, css, Global } from "@emotion/react";
import { theme } from "@evernest/theme";
import React from "react";

export const globalStyle = css`
	body {
		margin: 0;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

export const Wrapper: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Global styles={globalStyle} />
		{children}
	</ThemeProvider>
);
