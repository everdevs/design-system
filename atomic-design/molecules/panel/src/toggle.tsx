import styled from "@emotion/styled";
import React from "react";
import { StyledToggleProps, ToggleElement } from "./types";
import { css } from "@emotion/react";

export const StyledBurgerWrapper = styled.div`
	height: 48px;
	width: 48px;
	position: relative;
`;

export const StyledBurgerBun = styled.span`
	height: 2px;
	width: 16px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -1px -8px;
	background: currentColor;
	transition-duration: 0.3s;
	transition-property: transform;
`;

const bunTransformation = {
	top: {
		open: "translate3d(0, 0, 0) rotate3d(0,0,1,45deg)",
		closed: "translate3d(0, -4px, 0) rotate3d(0,0,0,0deg)",
	},
	bottom: {
		open: "translate3d(0, 0, 0) rotate3d(0,0,1,-45deg)",
		closed: "translate3d(0, 4px, 0) rotate3d(0,0,0,0deg)",
	},
};
export const Burger: React.FC<StyledToggleProps> = ({ open }) => {
	const [topBun, setTopBun] = React.useState(bunTransformation.top[open ? "open" : "closed"]);
	const [bottomBun, setBottomBun] = React.useState(
		bunTransformation.bottom[open ? "open" : "closed"]
	);
	React.useEffect(() => {
		setTopBun(bunTransformation.top[open ? "open" : "closed"]);
		setBottomBun(bunTransformation.bottom[open ? "open" : "closed"]);
	}, [open]);
	return (
		<StyledBurgerWrapper>
			<StyledBurgerBun style={{ transform: topBun }} />
			<StyledBurgerBun style={{ transform: bottomBun }} />
		</StyledBurgerWrapper>
	);
};

export const StyledToggle = styled.button<StyledToggleProps>`
	position: fixed;
	top: 12px;
	right: 16px;
	z-index: 101;
	height: 48px;
	width: 48px;
	background: none;
	font-size: 1em;
	border: 0;
	border-radius: 50%;
	padding: 0;
	margin: 0;
	box-shadow: none;
	display: flex;
	${({ theme: { palette } }) => css`
		color: ${palette.white.css};
	`};
`;

export const HiddenText = styled.span`
	position: absolute;
	top: -100vh;
	left: -100vw;
	display: block;
	height: 0;
	width: 0;
	opacity: 0;
`;

export const Toggle = React.forwardRef<ToggleElement, StyledToggleProps>(
	({ children, open, ...props }, ref) => (
		<StyledToggle {...props} open={open} ref={ref}>
			<Burger open={open} />
			<HiddenText>{open ? "close" : "open"} Menu</HiddenText>
		</StyledToggle>
	)
);
