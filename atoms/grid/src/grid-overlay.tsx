import React from "react";
import styled from "@emotion/styled";
import { Column } from "./column";
import { GUTTER } from "./constants";
import { StyledGrid } from "./grid";
import { Row } from "./row";
import { GridOverlayGridProps, GridOverlayProps } from "./types";

const GridOverlayGrid = styled(StyledGrid)<GridOverlayGridProps>`
	position: ${({ position }) => position};
	z-index: 99999;
	top: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	margin: 0;
	pointer-events: none;
	opacity: 0.15;
`;

const GridOverlayColumn = styled(Column)`
	height: 100%;
	background-clip: content-box, border-box;
	background-image: linear-gradient(red, red), linear-gradient(transparent, transparent);
	box-shadow: calc(var(${GUTTER}) * 1px) 0 0 blue, calc(var(${GUTTER}) * -1px) 0 0 blue;
`;

const GridOverlayRow = styled(Row)`
	height: 100%;
	overflow: hidden;
	box-shadow: 50vw 0 0 green, -50vw 0 0 green;
`;

const Toggle = styled.button<Pick<GridOverlayProps, "position">>`
	position: ${({ position }) => position};
	z-index: 100000;
	bottom: 8px;
	right: 8px;
	height: 48px;
	width: 48px;
	padding: 8px;
	background: #000;
	color: #fff;
	border: 0;
	border-radius: 50%;
`;

export const GridLayer: React.FC<GridOverlayProps> = ({ position }) => {
	return (
		<GridOverlayGrid position={position}>
			<GridOverlayRow>
				{Array(12)
					.fill(Boolean)
					.map((x, i) => (
						<GridOverlayColumn key={i} s={1}>
							&nbsp;
						</GridOverlayColumn>
					))}
			</GridOverlayRow>
		</GridOverlayGrid>
	);
};

export const GridOverlay: React.FC<GridOverlayProps> = ({
	initialActive,
	toggle,
	position = "fixed",
}) => {
	const [active, setActive] = React.useState(initialActive);
	const handleClick = React.useCallback(() => setActive(state => !state), []);
	return (
		<>
			{toggle && (
				<Toggle onClick={handleClick} position={position}>
					{active ? "gridOff" : "grid"}
				</Toggle>
			)}
			{active && <GridLayer position={position} />}
		</>
	);
};
