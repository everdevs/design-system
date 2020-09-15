import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { COLCOUNT, COLSPAN, GUTTER, PADDING } from "./constants";
import { Alignment, RowProps } from "./types";

export const Row = styled("div", {
	shouldForwardProp: (propName: string) => !["theme"].includes(propName),
})<RowProps>`
	${COLCOUNT}: var(${COLSPAN});
	display: flex;
	${({ raw, noWrap, reverse, justify }) => {
		const diff = raw ? `var(${GUTTER})` : `(var(${PADDING}) + var(${GUTTER}))`;
		return css`
			flex-wrap: ${noWrap ? "nowrap" : "wrap"};
			flex-direction: ${reverse ? "row-reverse" : "row"};
			justify-content: ${justify};
			width: calc(100% + ${diff} * 2px);
			margin-left: calc(${diff} * -1px);
			margin-right: calc(${diff} * -1px);
		`;
	}};
`;

Row.defaultProps = {
	justify: Alignment.start,
};
