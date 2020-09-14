import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { ButtonProps, Size, Variation } from "./types";

const Button = styled("button", {
	shouldForwardProp: (propName: string) => !["theme"].includes(propName),
})<ButtonProps>`
	cursor: pointer;
	border: 0;
	${({ theme, size, variation }) => css`
		box-shadow: ${theme.tokens.shadow.medium.css};
		height: ${size === Size.small ? "20px" : "40px"};
	`};
`;

Button.defaultProps = {
	type: "button",
	size: Size.medium,
	variation: Variation.default,
};

export { Button };
