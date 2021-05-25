import styled from "@emotion/styled";
import React from "react";
import { FooterLinkElement, StyledFooterLinkProps } from "./types";
import { css } from "@emotion/react";

export const StyledFooterLink = styled.a<StyledFooterLinkProps>`
	display: inline-flex;
	width: max-content;
	color: currentColor;
	text-decoration: none;
	font-size: 16px;
	font-weight: lighter;
	line-height: 28px;

	&:hover {
		${({ theme: { palette } }) => css`
			color: ${palette.blue.css};
		`};
	}
`;

export const FooterLink = React.forwardRef<FooterLinkElement, StyledFooterLinkProps>(
	(props, ref) => <StyledFooterLink {...props} ref={ref} />
);
