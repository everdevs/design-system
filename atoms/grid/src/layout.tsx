import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import { PropsWithTheme, theme } from "@evernest/theme";
import { normalize } from "@evernest/normalize-css";
import { ThemeProvider } from "emotion-theming";

export const cssNormalize = css`
	${normalize};
`;

export const globalStyles = css`
	html {
		font-family: object_sans, sans-serif;
	}
	body {
		margin: 0;
		min-height: 100vh;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

export const fontFaces = css`
	@font-face {
		font-family: "made_mirage";
		src: url("/fonts/web/made_mirage_medium-webfont.woff2") format("woff2"),
			url("/fonts/web/made_mirage_medium-webfont.woff") format("woff");
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: "object_sans";
		src: url("/fonts/web/ObjectSans-Regular.woff2") format("woff2"),
			url("/fonts/web/ObjectSans-Regular.woff") format("woff");
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: "object_sans";
		src: url("/fonts/web/ObjectSans-Bold.woff2") format("woff2"),
			url("/fonts/web/ObjectSans-Bold.woff") format("woff");
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: "object_sans";
		src: url("/fonts/web/ObjectSans-Thin.woff2") format("woff2"),
			url("/fonts/web/ObjectSans-Thin.woff") format("woff");
		font-weight: 100;
		font-style: normal;
	}
`;

export const Normalize = () => <Global styles={cssNormalize} />;
export const GlobalStyles = () => <Global styles={globalStyles} />;
export const FontFaces = () => <Global styles={fontFaces} />;

export const PageWithStyles: React.FC<PropsWithTheme> = ({ children, className }) => (
	<>
		<GlobalStyles />
		<Normalize />
		<FontFaces />
		<Page className={className}>{children}</Page>
	</>
);

export const ThemedPageWithStyles: React.FC<PropsWithTheme> = ({ children, className }) => (
	<ThemeProvider theme={theme}>
		<PageWithStyles className={className}>{children}</PageWithStyles>
	</ThemeProvider>
);

export const Page = styled.div<PropsWithTheme>`
	display: grid;
	grid-template-areas: "Header" "Main" "Footer";
	min-height: 100vh;
	${({ theme: { mq, layout } }) => css`
		--header-height: ${layout.header.height.s}px;
		@media ${mq.m} {
			--header-height: ${layout.header.height.m}px;
		}
		@media ${mq.l} {
			--header-height: ${layout.header.height.l}px;
		}
	`};
`;

export const Header = styled.header<PropsWithTheme>`
	grid-area: Header;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	height: var(--header-height);
`;

export const Footer = styled.footer`
	grid-area: Footer;
`;

export const Main = styled.main<PropsWithTheme>`
	grid-area: Main;
	margin-top: var(--header-height);
	min-height: calc(100vh - var(--header-height));
`;
