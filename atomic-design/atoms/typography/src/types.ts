import { PropsWithTheme } from "@evernest/theme";

export type TypographyElement = HTMLDivElement;

export enum TypographyVariant {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	body = "body",
	body2 = "body2",
}

export interface StyledTypographyProps extends PropsWithTheme<TypographyElement> {
	/** Add types */
	/** @default TypographyVariant.body */
	variant?: TypographyVariant;
	component?: keyof JSX.IntrinsicElements;
}
