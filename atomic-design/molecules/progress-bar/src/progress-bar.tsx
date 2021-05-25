import styled from "@emotion/styled";
import React from "react";
import { ProgressBarElement, ProgressBarProps, StyledProgressBarProps } from "./types";
import { animated, useSpring } from "react-spring";
import { css } from "@emotion/react";

const StyledProgressBar = styled(animated.div)<StyledProgressBarProps>`
	height: 8px;
	${({ theme: { palette } }) => css`
		background: ${palette.green.css};
	`};
`;

export const ProgressBar = React.forwardRef<ProgressBarElement, ProgressBarProps>((props, ref) => {
	const { label, current, segments, ...rest } = props;
	const percentage = Math.ceil((current / segments) * 100);
	const animatedStyles = useSpring({ width: `${percentage > 100 ? 100 : percentage}%` });
	return (
		<StyledProgressBar
			aria-valuemin={0}
			aria-valuemax={segments}
			aria-valuenow={current}
			aria-valuetext={label}
			ref={ref}
			role="progressbar"
			style={(animatedStyles as unknown) as React.CSSProperties}
			{...rest}
		/>
	);
});
