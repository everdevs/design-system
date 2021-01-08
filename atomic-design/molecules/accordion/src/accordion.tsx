import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Icon, Size } from "@evernest/icon";
import { PropsWithTheme } from "@evernest/theme";
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
	display: flex;
	height: 100%;
	overflow: hidden;
	text-align: left;
`;

export const StyledPanel = styled.div<PropsWithTheme>`
	padding-bottom: var(--spacing-xs);
	padding-left: var(--spacing-s);
	${({ theme: { mq } }) => css`
		@media ${mq.l} {
			padding-left: var(--spacing-m);
		}
	`};
`;

export const StyledAnimatedPanelWrapper = styled(animated.div)`
	overflow: hidden;
`;

export const StyledIconWrapper = styled(animated.div)<PropsWithTheme>`
	display: inline-flex;
	min-width: var(--spacing-s);
	${({ theme: { mq } }) => css`
		@media ${mq.l} {
			min-width: var(--spacing-m);
		}
	`};
`;

export const StyledAnimatedIconWrapper = styled(animated.span)`
	display: inline-flex;
`;

export const Accordion = React.forwardRef<AccordionElement, AccordionProps>(
	({ id, children, title, headerComponent, springConfig, ...props }, ref) => {
		const [expanded, setExpanded] = React.useState(false);
		const [panelBottomPadding, setPanelBottomPadding] = React.useState(0);

		const handleClick = () => setExpanded(!expanded);

		const panelId = `${id}-panel`;

		const [useMeasureRef, { height }] = useMeasure<HTMLDivElement>();

		const springPanelProps = useSpring({
			config: springConfig,
			height: expanded ? height + panelBottomPadding : 0,
		});

		const { z } = useSpring({
			config: springConfig,
			z: expanded ? 0.125 : 0,
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
							<StyledIconWrapper>
								<StyledAnimatedIconWrapper
									style={{
										transform: z.interpolate(
											value => `rotate3d(0,0,1,${value}turn)`
										),
									}}
								>
									<Icon aria-hidden="true" icon="close" size={Size.medium} />
								</StyledAnimatedIconWrapper>
							</StyledIconWrapper>
							<span data-test-id="styled-inner-button-wrapper-label">{title}</span>
						</StyledInnerButtonWrapper>
					</StyledButton>
				</HeaderComponent>
				<StyledAnimatedPanelWrapper style={springPanelProps}>
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
