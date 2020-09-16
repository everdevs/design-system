import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { PropsWithTheme, theme } from "@evernest/theme";
import { ThemeProvider } from "emotion-theming";
import { FontFaces, GlobalStyles, Normalize } from "./styles";

export const Page = styled.div<PropsWithTheme>`
	display: grid;
	grid-template-areas: "Header" "Main" "Footer";
	min-height: 100vh;
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

export const PageWithStyles: React.FC<PropsWithTheme> = ({ children, className }) => (
	<>
		<Normalize />
		<GlobalStyles />
		<FontFaces />
		<Page className={className}>{children}</Page>
	</>
);

export const ThemedPageWithStyles: React.FC<PropsWithTheme> = ({ children, className }) => (
	<ThemeProvider theme={theme}>
		<PageWithStyles className={className}>{children}</PageWithStyles>
	</ThemeProvider>
);
