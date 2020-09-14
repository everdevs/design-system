import styled from "@emotion/styled";
import React from "react";
import { StyledMenuProps, MenuProps } from "./types";

export const StyledMenuTpl = styled.div<StyledMenuProps>``;

export const Menu = React.forwardRef<MenuProps, StyledMenuProps>(
	({ children, className, ...props }, ref) => (
		<StyledMenuTpl className={className} ref={ref}>
			{children}
		</StyledMenuTpl>
	)
);
