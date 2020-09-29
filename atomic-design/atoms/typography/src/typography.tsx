import styled from "@emotion/styled";
import React from "react";
import { StyledTypographyProps, TypographyElement, TypographyVariant } from "./types";

export const StyledHeadline1 = styled.h1<StyledTypographyProps>`
	font-family: var(--font-face-serif);
	font-weight: normal;
	font-size: 55px;
	line-height: 63px;
`;
export const StyledHeadline2 = styled.h2<StyledTypographyProps>`
	font-family: var(--font-face-serif);
	font-weight: normal;
	font-size: 36px;
	line-height: 45px;
`;
export const StyledHeadline3 = styled.h3<StyledTypographyProps>`
	font-family: var(--font-face-serif);
	font-weight: normal;
	font-size: 24px;
	line-height: 36px;
`;

export const StyledHeadline4 = styled.h4<StyledTypographyProps>`
	font-family: var(--font-face-serif);
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	margin: 0;
`;

export const Body = styled.div<StyledTypographyProps>`
	font-family: var(--font-face-sans-serif);
	font-weight: lighter;
	font-size: 16px;
	line-height: 28px;
`;

export const Body2 = styled.div<StyledTypographyProps>`
	font-family: var(--font-face-sans-serif);
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
`;

const variants = {
	[TypographyVariant.h1]: StyledHeadline1,
	[TypographyVariant.h2]: StyledHeadline2,
	[TypographyVariant.h3]: StyledHeadline3,
	[TypographyVariant.h4]: StyledHeadline4,
	[TypographyVariant.body]: Body,
	[TypographyVariant.body2]: Body2,
};

export const Typography = React.forwardRef<TypographyElement, StyledTypographyProps>(
	({ variant, component, ...props }, ref) => {
		const Variant = React.useMemo(() => (variant ? variants[variant] : Body), [variant]);
		const Component = React.useMemo(
			() => (component ? Variant.withComponent(component) : Variant),
			[Variant, component]
		);
		return <Component {...props} ref={ref} />;
	}
);

Typography.defaultProps = {
	variant: TypographyVariant.body,
};
