import { icons } from "@evernest/icons";
import styled from "@emotion/styled";
import humanize from "humanize-string";
import React from "react";
import { IconProps, Size } from "./types";

const StyledSvg = styled.svg`
	fill: currentColor;
`;

const StyledPath = styled.path`
	fill: currentColor;
`;

const Icon: React.FC<IconProps> = ({ className, icon, size, ...props }) => {
	return (
		<StyledSvg
			{...props}
			viewBox={`0 0 ${size} ${size}`}
			className={className}
			height={size}
			width={size}
		>
			<title>{humanize(icon as string)}</title>
			<StyledPath d={icons[size][icon]} />
		</StyledSvg>
	);
};

Icon.defaultProps = {
	size: Size.medium,
};

export { Icon };
