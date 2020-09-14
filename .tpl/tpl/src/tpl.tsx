import styled from "@emotion/styled";
import React from "react";
import { StyledTplProps, TplProps } from "./types";

export const StyledTpl = styled.div<StyledTplProps>``;

export const Tpl = React.forwardRef<TplProps, StyledTplProps>(
	({ children, className, ...props }, ref) => (
		<StyledTpl className={className} ref={ref}>
			{children}
		</StyledTpl>
	)
);
