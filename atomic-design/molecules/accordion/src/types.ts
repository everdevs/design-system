import { PropsWithTheme } from "@evernest/theme";

export type AccordionElement = HTMLDivElement;

export interface AccordionProps extends PropsWithTheme {
	title: string;
	headerComponent?: keyof JSX.IntrinsicElements | any;
}

export interface StyledAccordionProps extends PropsWithTheme<AccordionElement> {}

export interface StyledButtonProps extends PropsWithTheme<HTMLButtonElement> {
	"aria-expanded": boolean;
	"aria-controls": string;
	id: string;
	onClick: () => void;
}

export interface StyledPanelProps extends PropsWithTheme<AccordionElement> {
	"aria-labelledby": string;
	expanded: boolean;
	id: string;
	role: string;
}
