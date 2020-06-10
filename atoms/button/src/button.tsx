import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ButtonAttributes, ButtonProps, Size } from "./types";
import { button, color, radius } from "@evernest/tokens";

const ButtonBase: React.FC<ButtonAttributes> = ({ children, ...props }) => (
	<button {...props}>{children}</button>
);

const Button = styled(ButtonBase, {
	shouldForwardProp: (propName: string) => !["size", "token"].includes(propName),
})<ButtonProps>`
	cursor: pointer;
	border: 0;
	${({
		token: {
			value: {
				spaces,
				colors: {
					text: {
						value: { type: textType, value: textValue },
					},
					background: {
						value: { type: backgroundType, value: backgroundValue },
					},
				},
				font: { value: font },
				radius: {
					value: { type: radiusType, value: radiusValue },
				},
				shadow: {
					value: {
						spread,
						blur,
						offset,
						color: {
							value: { type: colorType, value: colorValue },
						},
					},
				},
			},
		},
	}) =>
		css`
			padding: ${spaces.map(space => `${space}px`).join(" ")};
			background: ${color.getColor(backgroundType, backgroundValue)};
			color: ${color.getColor(textType, textValue)};
			box-shadow: ${offset.map(dir => `${dir}px`).join(" ")} ${blur}px ${spread}px
				${color.getColor(colorType, colorValue)};
			border-radius: ${radius.getRadius(radiusType, radiusValue)};
			font-family: ${font.family};
			font-size: ${font.size}px;
			font-weight: ${font.weight};
			font-style: ${font.style};
			&:focus {
				outline: 0;
			}
		`};
`;

Button.defaultProps = {
	size: Size.medium,
	type: "button",
	token: button.base,
};

export { Button };
