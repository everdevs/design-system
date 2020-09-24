import { css, Global } from "@emotion/core";
import { theme } from "@evernest/theme";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import React from "react";

export function random(max: number, min: number = 0): number {
	return Math.floor(Math.random() * max) + min;
}

export function randomColor(): string {
	return `hsla(${random(359)},50%,50%,0.5)`;
}

export const range = (n: number, start = 1): number[] =>
	new Array(n).fill(Boolean).map((x, i) => i + start);

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

/* istanbul ignore next */
export const withWrapper = () => storyFn => <Wrapper>{storyFn()}</Wrapper>;

export const ColorBox = styled.div<{
	background?: string;
	color?: string;
	margin?: string;
	height?: string;
}>`
	width: 100%;
	display: inherit;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	height: inherit;
	${({ background, color, height }) => css`
		min-height: ${height};
		color: ${color};
		background: ${background};
	`};
	${({ margin }) =>
		margin &&
		css`
			margin: ${margin} 0;
		`};
`;

ColorBox.defaultProps = {
	background: "black",
	color: "white",
	height: "2em",
};
