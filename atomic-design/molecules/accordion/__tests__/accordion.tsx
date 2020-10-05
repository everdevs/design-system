import { createTree, Wrapper } from "@evernest/dev-helpers";
import { mount } from "enzyme";
import React from "react";
import { Accordion, AccordionProps, StyledButton, StyledPanel } from "../src";

const WrappedAccordion: React.FC<AccordionProps> = props => (
	<Wrapper>
		<Accordion {...props} />
	</Wrapper>
);

test("Accordion renders title", () => {
	const text = "Title";
	const wrapper = mount(<WrappedAccordion title="Title" />);
	expect(wrapper.find("[data-test-id='styled-inner-button-wrapper-label']").at(0).text()).toEqual(
		text
	);
});

test("Accordion renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(<WrappedAccordion title="Title">{text}</WrappedAccordion>);
	expect(wrapper.find(StyledPanel).text()).toEqual(text);
});

test("Accordion matches snapshot", () => {
	const closed = createTree(<WrappedAccordion title="Title">content</WrappedAccordion>);
	expect(closed).toMatchSnapshot();
});

test("Accordion prop 'expanded' toggles on click", () => {
	const wrapper = mount(<WrappedAccordion title="Title" />);
	const button = wrapper.find(StyledButton);

	button.simulate("click");
	expect(wrapper.find(StyledButton).props()["aria-expanded"]).toEqual(true);

	button.simulate("click");
	expect(wrapper.find(StyledButton).props()["aria-expanded"]).toEqual(false);
});
