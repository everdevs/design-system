import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { StyledMenuProps, MenuProps } from "./types";

export const StyledMenuTpl = styled.nav<StyledMenuProps>`
	display: none;
	${({ theme: { mq } }) => css`
		@media ${mq.l} {
			display: flex;
		}
	`};
`;

export const Menu = React.forwardRef<MenuProps, StyledMenuProps>(
	({ children, className, ...props }, ref) => (
		<StyledMenuTpl className={className} ref={ref}>
			{children}
		</StyledMenuTpl>
	)
);
