import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { GUTTER, PADDING } from "./constants";
import { BoxProps } from "./types";

const StyledBox = styled.div<BoxProps>`
	flex: 1;
	${({ flex }) => css`
		display: ${flex ? "flex" : "block"};
	`};
	${({ removePadding, removeGutter, addGutter, addPadding }) => {
		if (removePadding) {
			if (removeGutter) {
				return css`
					margin-left: calc((var(${PADDING}) + var(${GUTTER})) * -1px);
					margin-right: calc((var(${PADDING}) + var(${GUTTER})) * -1px);
				`;
			}
			return css`
				margin-left: calc(var(${PADDING}) * -1px);
				margin-right: calc(var(${PADDING}) * -1px);
			`;
		}
		if (removeGutter) {
			return css`
				margin-left: calc(var(${GUTTER}) * -1px);
				margin-right: calc(var(${GUTTER}) * -1px);
			`;
		}
		if (addGutter) {
			if (addPadding) {
				return css`
					padding-left: calc(var(${PADDING}) * 1px);
					padding-right: calc(var(${PADDING}) * 1px);
					margin-left: calc(var(${GUTTER}) * 1px);
					margin-right: calc(var(${GUTTER}) * 1px);
				`;
			}
			return css`
				margin-left: calc(var(${GUTTER}) * 1px);
				margin-right: calc(var(${GUTTER}) * 1px);
			`;
		}
		return css`
			padding-left: calc(var(${PADDING}) * 1px);
			padding-right: calc(var(${PADDING}) * 1px);
		`;
	}};
`;

export const Box: React.FC<BoxProps> = props => {
	return <StyledBox {...props} />;
};
