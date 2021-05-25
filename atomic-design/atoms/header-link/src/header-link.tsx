import styled from "@emotion/styled";
import React from "react";
import { HeaderLinkElement, StyledHeaderLinkProps } from "./types";
import { PropsWithTheme } from "@evernest/theme";
import { css } from "@emotion/react";

const StyledHighlight = styled.div<PropsWithTheme>`
	pointer-events: none;
	position: absolute;
	top: 50%;
	left: 50%;
	height: var(--spacing-s);
	width: 100%;
	transform: translate(-50%, -50%);
	transition: opacity 0.3s ease-in-out;
	will-change: opacity;
	opacity: var(--highlight-opacity);
	${({ theme: { palette } }) => css`
		background: ${palette.white.css};
	`};
`;

const StyledHeaderLink = styled.a<StyledHeaderLinkProps>`
	--highlight-opacity: 0;

	position: relative;
	display: inline-flex;
	color: currentColor;
	text-decoration: none;
	padding: var(--spacing-s) 10px;
	margin-left: 16px;
	font-size: 14px;
	font-weight: lighter;
	line-height: 28px;
	border-radius: 2px;

	&:hover {
		--highlight-opacity: 0.1;
	}
`;

export const HeaderLink = React.forwardRef<HeaderLinkElement, StyledHeaderLinkProps>(
	({ children, ...props }, ref) => (
		<StyledHeaderLink {...props} ref={ref}>
			<StyledHighlight />
			{children}
		</StyledHeaderLink>
	)
);
