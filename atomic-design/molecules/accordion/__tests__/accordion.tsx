import { withTheme, createTree } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { mount } from "enzyme";
import React from "react";
import { Accordion, AccordionProps, StyledPanel } from "../src";

jest.mock("uuid");

const ThemedAccordion = withTheme<AccordionProps>(Accordion, theme);

test("Accordion renders title", () => {
	const text = "Title";
	const wrapper = mount(<ThemedAccordion title="Title" />);
	expect(wrapper.find("[data-test-id='styled-inner-button-wrapper-label']").at(0).text()).toEqual(
		text
	);
});

test("Accordion renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(<ThemedAccordion title="Title">{text}</ThemedAccordion>);
	expect(wrapper.find(StyledPanel).text()).toEqual(text);
});

test("Accordion matches snapshot", () => {
	const closed = createTree(<ThemedAccordion title="Title">content</ThemedAccordion>);
	expect(closed).toMatchSnapshot();
});
