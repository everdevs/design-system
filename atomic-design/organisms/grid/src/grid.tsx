import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { COLSPAN, GRID_PADDING, GUTTER, PADDING } from "./constants";
import { GridProps } from "./types";

export const GridWrapper = styled.div`
	overflow: hidden;
	width: 100%;
`;

export const StyledGrid = styled("div", {
	shouldForwardProp: (propName: string) => !["theme"].includes(propName),
})<GridProps>`
	display: flex;
	flex-direction: column;
	width: calc(100% - (var(${GRID_PADDING}) + var(${GUTTER})) * 2px);
	margin-left: calc((var(${GRID_PADDING}) + var(${GUTTER})) * 1px);
	margin-right: calc((var(${GRID_PADDING}) + var(${GUTTER})) * 1px);
	padding-left: calc(var(${PADDING}) * 1px);
	padding-right: calc(var(${PADDING}) * 1px);
	${({
		theme: {
			mq,
			grid: { gutter, padding, maxWidth, colSpan, gridPadding },
		},
	}) => css`
		${GUTTER}: ${gutter.s};
		${GRID_PADDING}: ${gridPadding.s};
		${PADDING}: ${padding.s};
		${COLSPAN}: ${colSpan.s};
		max-width: ${maxWidth}px;

		@media ${mq.m} {
			${GUTTER}: ${gutter.m};
			${GRID_PADDING}: ${gridPadding.m};
			${PADDING}: ${padding.m};
			${COLSPAN}: ${colSpan.m};
		}

		@media ${mq.l} {
			${GUTTER}: ${gutter.l};
			${GRID_PADDING}: ${gridPadding.l};
			${PADDING}: ${padding.l};
			${COLSPAN}: ${colSpan.l};
		}
		@media ${mq.xl} {
			margin: 0 auto;
			width: 100%;
		}
	`};
`;

export const Grid: React.FC<GridProps> = ({ children, className, overflow }) => {
	return overflow ? (
		<StyledGrid>{children}</StyledGrid>
	) : (
		<GridWrapper className={className}>
			<StyledGrid>{children}</StyledGrid>
		</GridWrapper>
	);
};
