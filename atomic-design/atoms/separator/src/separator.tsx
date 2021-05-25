import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SeparatorElement, StyledSeparatorProps } from "./types";

export const StyledSeparator = styled.div<StyledSeparatorProps>`
	height: 1px;
	margin: var(--spacing-m) 0;
	${({ theme: { palette } }) => css`
		background: ${palette.brightGrey.css};
	`};
`;

export const Separator = React.forwardRef<SeparatorElement>((props, ref) => (
	<StyledSeparator {...props} ref={ref} />
));
