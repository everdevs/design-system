import { PropsWithTheme } from "@evernest/theme";

export type AccordionElement = HTMLDivElement;

export interface AccordionProps extends PropsWithTheme {
	title: string;
	headerComponent?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export interface StyledAccordionProps extends PropsWithTheme<AccordionElement> {}

export interface StyledButtonProps extends PropsWithTheme<HTMLButtonElement> {}

export interface StyledPanelProps extends PropsWithTheme<AccordionElement> {
	expanded: boolean;
}
