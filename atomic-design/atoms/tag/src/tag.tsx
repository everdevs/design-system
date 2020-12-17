import styled from "@emotion/styled";
import React from "react";
import { StyledTagProps, TagElement, TagProps } from "./types";
import { css } from "@emotion/core";

export const StyledTag = styled.span<StyledTagProps>`
	border-radius: 5px;
	padding: var(--spacing-xxxs);
	${({ theme: { palette } }) => css`
		background: ${palette.brandGreen.css};
		color: ${palette.white.css};
	`};
`;

export const Tag = React.forwardRef<TagElement, TagProps>((props, ref) => {
	const { text, ...rest } = props;
	return (
		<StyledTag {...rest} ref={ref}>
			{text}
		</StyledTag>
	);
});
