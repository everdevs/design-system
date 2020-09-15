import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { COLCOUNT, COLSPAN, COLUMN, GUTTER, PADDING } from "./constants";
import { ColumnProps } from "./types";

export const Column = styled("div", {
	shouldForwardProp: (propName: string) => !["theme"].includes(propName),
})<ColumnProps>`
	margin-left: calc(var(${GUTTER}) * 1px);
	margin-right: calc(var(${GUTTER}) * 1px);
	width: calc(100% / var(${COLCOUNT}) * var(${COLSPAN}) - var(${GUTTER}) * 2px);
	flex-shrink: 0;
	${({ s, m = s, l = m, flex, raw, order, theme: { mq } }) => css`
		display: ${s === 0 ? "none" : flex ? "flex" : "block"};
		${!raw &&
		css`
			padding-left: calc(var(${PADDING}) * 1px);
			padding-right: calc(var(${PADDING}) * 1px);
		`};
		${order !== undefined &&
		css`
			order: ${order};
		`};
		${COLSPAN}: ${s};

		@media ${mq.m} {
			${COLSPAN}: ${m};
			display: ${m === 0 ? "none" : flex ? "flex" : "block"};
		}

		@media ${mq.l} {
			${COLSPAN}: ${l};
			display: ${l === 0 ? "none" : flex ? "flex" : "block"};
		}
	`};
`;

Column.defaultProps = {
	s: COLUMN.ONE,
	suppressHydrationWarning: true,
};
