import styled from "@emotion/styled";
import React from "react";
import { HeaderElement, StyledHeaderProps } from "./types";
import { css } from "@emotion/core";
import { useWindowScroll } from "react-use";
import { PropsWithTheme } from "@evernest/theme";
import { toOpacityValue } from "./utils";

export const StyledHeader = styled.div<StyledHeaderProps>`
	height: var(--header-height, inherit);
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	${({ theme: { palette }, fixed, plain, sticky }) => css`
		position: ${fixed ? "fixed" : sticky ? "sticky" : "absolute"};
		background: ${plain ? "inherit" : "none"};
		color: ${plain ? "currentColor" : palette.white.css};
	`};
`;

export const StyledHeaderBackground = styled.div<StyledHeaderProps>`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 0;
	${({ theme: { palette }, plain }) => css`
		background: ${plain ? "inherit" : palette.darkGrey.css};
	`};
`;
export const StyledHeaderContent = styled.div<PropsWithTheme>`
	height: inherit;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 1;
	position: relative;
`;

export const Header = React.forwardRef<HeaderElement, StyledHeaderProps>(
	({ children, translucent, fadeOffset, ...props }, ref) => {
		const [opacity, setOpacity] = React.useState(translucent ? 0 : 1);
		const { y } = useWindowScroll();
		React.useEffect(() => {
			setOpacity(toOpacityValue(translucent ? y : fadeOffset, fadeOffset));
		}, [translucent, y, fadeOffset]);
		return (
			<StyledHeader {...props} ref={ref}>
				<StyledHeaderBackground {...props} style={{ opacity }} />
				<StyledHeaderContent {...props}>{children}</StyledHeaderContent>
			</StyledHeader>
		);
	}
);
Header.defaultProps = {
	fadeOffset: 0,
};
