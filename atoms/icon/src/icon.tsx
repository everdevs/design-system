import { icons } from "@evernest/icons";
import styled from "@emotion/styled";
import humanize from "humanize-string";
import React from "react";
import { IconProps, Size } from "./types";

const Svg = styled("svg", {
	shouldForwardProp: prop => prop !== "size",
})<Pick<IconProps, "size">>`
	height: 1em;
	width: 1em;
	font-size: ${({ size }) => `${size}px`};
`;

const Path = styled.path`
	fill: currentColor;
`;

const Icon: React.FC<IconProps> = ({ className, icon, size }) => {
	return (
		<Svg viewBox={`0 0 ${size} ${size}`} size={size} className={className}>
			<title>{humanize(icon as string)}</title>
			<Path d={icons[size][icon]} />
		</Svg>
	);
};

Icon.defaultProps = {
	size: Size.medium,
};

export { Icon };
