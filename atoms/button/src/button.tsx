import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ButtonProps } from "./types";
import { buttonBase, getColor, getRadius, px } from "@evernest/tokens";

const Button = styled("button", {
	shouldForwardProp: (propName: string) => !["token"].includes(propName),
})<ButtonProps>`
	cursor: pointer;
	border: 0;
	${({
		token: {
			value: {
				spaces,
				colors: { text, background },
				font: { value: font },
				radius,
				shadow: { value: shadow },
			},
		},
	}) =>
		css`
			padding: ${spaces.map(x => px(x)).join(" ")};
			background: ${getColor(background)};
			color: ${getColor(text)};
			box-shadow: ${shadow.offset.map(x => px(x)).join(" ")} ${px(shadow.blur)}
				${px(shadow.spread)} ${getColor(shadow.color)};
			border-radius: ${getRadius(radius)};
			font-family: ${font.family};
			font-size: ${px(font.size)};
			font-weight: ${font.weight};
			font-style: ${font.style};
			&:focus {
				outline: 0;
			}
		`};
`;

Button.defaultProps = {
	type: "button",
	token: buttonBase,
};

export { Button };
