import { css, Global } from "@emotion/core";
import { PropsWithTheme, theme } from "@evernest/theme";
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

export const StyledWrapper = styled.div<PropsWithTheme>`
	${({ theme: { mq, layout, spaces } }) => css`
		--spacing-xxxs: ${spaces.xxxs}px;
		--spacing-xxs: ${spaces.xxs}px;
		--spacing-xs: ${spaces.xs}px;
		--spacing-s: ${spaces.s}px;
		--spacing-m: ${spaces.m}px;
		--spacing-l: ${spaces.l}px;
		--spacing-xl: ${spaces.xl}px;
		--spacing-xxl: ${spaces.xxl}px;
		--spacing-xxxl: ${spaces.xxxl}px;
		--header-height: ${layout.header.height.s}px;
		@media ${mq.m} {
			--header-height: ${layout.header.height.m}px;
		}
		@media ${mq.l} {
			--header-height: ${layout.header.height.l}px;
		}
	`};
`;

export const Wrapper: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<StyledWrapper>
			<Global styles={globalStyle} />
			{children}
		</StyledWrapper>
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
