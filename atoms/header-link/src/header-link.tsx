import styled from "@emotion/styled";
import React from "react";
import { StyledHeaderLinkProps, HeaderLinkProps } from "./types";

const StyledHeaderLink = styled.a<StyledHeaderLinkProps>`
	display: inline-flex;
	font-family: sans-serif;
	color: currentColor;
	text-decoration: none;
	padding: 10px 8px;
	margin-left: 16px;
	font-size: 14px;
	font-weight: lighter;
	line-height: 28px;
	border-radius: 2px;
	background-color: rgba(255, 255, 255, 0);
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const HeaderLink = React.forwardRef<HeaderLinkProps, StyledHeaderLinkProps>(
	({ children, className, ...props }, ref) => (
		<StyledHeaderLink className={className} ref={ref}>
			{children}
		</StyledHeaderLink>
	)
);
