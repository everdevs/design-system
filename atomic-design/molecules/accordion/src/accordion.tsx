import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Icon, Size } from "@evernest/icon";
import React from "react";
import { animated, useSpring } from "react-spring";
import { useMeasure } from "react-use";
import { AccordionElement, AccordionProps, StyledAccordionProps } from "./types";

/* @todo: revisit border style with token refactor */
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
	({ id, children, title, headerComponent, springConfig, ...props }, ref) => {
		const [expanded, setExpanded] = React.useState(false);
		const [panelBottomPadding, setPanelBottomPadding] = React.useState(0);

		const handleClick = () => setExpanded(!expanded);

		const panelId = `${id}-panel`;

		const [useMeasureRef, { height }] = useMeasure<HTMLDivElement>();

		const springProps = useSpring({
			config: springConfig,
			height: expanded ? height + panelBottomPadding : 0,
		});

		React.useEffect(() => {
			const panelEl = document.getElementById(panelId);
			/* istanbul ignore next */
			if (panelEl) {
				const paddingBottom = getComputedStyle(panelEl).paddingBottom;
				setPanelBottomPadding(parseInt(paddingBottom));
			}
		}, [panelId, setPanelBottomPadding]);

		const HeaderComponent = React.useMemo(() => headerComponent, [headerComponent]);

		return (
			<StyledAccordion {...props} ref={ref}>
				<HeaderComponent>
					<StyledButton
						aria-controls={panelId}
						aria-expanded={expanded}
						id={id}
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
						ref={useMeasureRef}
						aria-labelledby={id}
						id={panelId}
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
	springConfig: undefined,
};
