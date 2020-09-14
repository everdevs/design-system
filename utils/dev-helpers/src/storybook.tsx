import { css, Global } from "@emotion/core";
import { theme } from "@evernest/theme";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import React from "react";

export const globalStyle = css`
	body {
		margin: 0;
		min-height: 100vh;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	.sb-show-main {
		padding: 0 !important;
	}
`;

export const Wrapper: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Global styles={globalStyle} />
		{children}
	</ThemeProvider>
);

export const withWrapper = () => storyFn => <Wrapper>{storyFn()}</Wrapper>;

export const ColorBox = styled.div<{ background?: string; color?: string }>`
	min-height: 2em;
	height: inherit;
	display: inherit;
	${({ background, color }) => css`
		color: ${color};
		background: ${background};
	`};
`;

ColorBox.defaultProps = {
	background: "black",
	color: "white",
};
