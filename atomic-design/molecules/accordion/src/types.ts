import React from "react";
import { PropsWithTheme } from "@evernest/theme";
import { SpringConfig } from "react-spring";

export type AccordionElement = HTMLDivElement;

export interface AccordionProps extends PropsWithTheme {
	title: string;
	springConfig?: SpringConfig;
	headerComponent?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export interface StyledAccordionProps extends PropsWithTheme<AccordionElement> {}
