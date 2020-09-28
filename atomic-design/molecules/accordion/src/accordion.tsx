import { Icon, Size } from "@evernest/icon";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { v4 as uuid } from "uuid";

import {
	AccordionProps,
	StyledAccordionProps,
	StyledButtonProps,
	StyledPanelProps,
	AccordionElement,
} from "./types";

export const StyledAccordion = styled("div", {
	shouldForwardProp: (propName: string) => !["theme"].includes(propName),
})<StyledAccordionProps>`
	${({ theme: { palette } }) => css`
		color: ${palette.white.css};
		border-bottom: 1px solid ${palette.brightGrey.css};
	`};
`;

export const StyledButton = styled.button<StyledButtonProps>`
	appearance: none;
	background: none;
	border: none;
	border-radius: 0;
	color: currentColor;
	font-family: inherit;
	font-size: inherit;
	padding: 0;
	width: 100%;
`;

export const StyledInnerButtonWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	height: 100%;
`;

export const StyledPanel = styled.div<StyledPanelProps>`
	padding-bottom: var(--spacing-xs);
	${({ expanded }) => css`
		display: ${expanded ? "block" : "none"};
	`};
`;

export const Accordion = React.forwardRef<AccordionElement, AccordionProps>(
	({ children, title, headerComponent, ...props }, ref) => {
		const [expanded, setExpanded] = React.useState(false);

		const handleClick = () => setExpanded(!expanded);

		const buttonId = React.useMemo(() => uuid(), []);
		const panelId = `${buttonId}-panel`;

		const HeaderComponent = React.useMemo(() => headerComponent, [headerComponent]);

		return (
			<StyledAccordion {...props} ref={ref}>
				<HeaderComponent>
					<StyledButton
						aria-controls={panelId}
						aria-expanded={expanded}
						id={buttonId}
						onClick={handleClick}
					>
						<StyledInnerButtonWrapper>
							<span data-test-id="styled-inner-button-wrapper-label">{title}</span>
							<Icon aria-hidden="true" size={Size.medium} icon="chevronDown" />
						</StyledInnerButtonWrapper>
					</StyledButton>
				</HeaderComponent>
				<StyledPanel
					aria-labelledby={buttonId}
					expanded={expanded}
					id={panelId}
					role="region"
				>
					{children}
				</StyledPanel>
			</StyledAccordion>
		);
	}
);

Accordion.defaultProps = {
	headerComponent: "div",
};
