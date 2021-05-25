import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { FooterElement, StyledFooterProps } from "./types";

export const StyledFooter = styled.div<StyledFooterProps>`
	padding: var(--spacing-xl) 0;
	${({ theme: { palette } }) => css`
		background: ${palette.darkGrey.css};
		color: ${palette.white.css};
	`};
`;

export const Footer = React.forwardRef<FooterElement, StyledFooterProps>((props, ref) => (
	<StyledFooter {...props} ref={ref} />
));
