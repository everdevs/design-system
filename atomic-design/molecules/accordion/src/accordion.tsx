import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Icon, Size } from "@evernest/icon";
import React from "react";
import { animated, useSpring } from "react-spring";
import { v4 as uuid } from "uuid";
import { AccordionElement, AccordionProps, StyledAccordionProps } from "./types";

/* @todo: revisit border style if component on lighter backgrounds */
export const StyledAccordion = styled("div", {
	shouldForwardProp: (propName: string) => !["theme"].includes(propName),
})<StyledAccordionProps>`
	${({ theme: { palette } }) => css`
		border-bottom: 1px solid ${palette.brightGrey.css};
	`};
`;

export const StyledButton = styled.button`
	appearance: none;
	background: none;
	border-radius: 0;
	border: none;
	color: currentColor;
	cursor: pointer;
	font-family: inherit;
	font-size: inherit;
	padding: 0 0 var(--spacing-xs);
	width: 100%;
`;

export const StyledInnerButtonWrapper = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: space-between;
`;

export const StyledPanel = styled.div`
	padding-bottom: var(--spacing-xs);
`;

export const StyledAnimatedPanelWrapper = styled(animated.div)`
	overflow: hidden;
`;

export const Accordion = React.forwardRef<AccordionElement, AccordionProps>(
	({ children, title, headerComponent, springConfig, ...props }, ref) => {
		const styledPanelRef = React.useRef<HTMLDivElement>(null);
		const [expanded, setExpanded] = React.useState(false);
		const [panelContentHeight, setPanelContentHeight] = React.useState<number>(null);

		const handleClick = () => setExpanded(!expanded);

		const buttonId = React.useMemo(() => uuid(), []);
		const panelId = `${buttonId}-panel`;

		const springProps = useSpring({
			config: springConfig,
			height: expanded ? panelContentHeight : 0,
		});

		const HeaderComponent = React.useMemo(() => headerComponent, [headerComponent]);

		React.useEffect(() => {
			if (styledPanelRef && styledPanelRef.current) {
				setPanelContentHeight(styledPanelRef.current.offsetHeight);
			}
		}, []);

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
							<Icon
								aria-hidden="true"
								icon={expanded ? "chevronUp" : "chevronDown"}
								size={Size.medium}
							/>
						</StyledInnerButtonWrapper>
					</StyledButton>
				</HeaderComponent>
				<StyledAnimatedPanelWrapper style={springProps}>
					<StyledPanel
						aria-labelledby={buttonId}
						id={panelId}
						ref={styledPanelRef}
						role="region"
					>
						{children}
					</StyledPanel>
				</StyledAnimatedPanelWrapper>
			</StyledAccordion>
		);
	}
);

Accordion.defaultProps = {
	headerComponent: "div",
	springConfig: {},
};
