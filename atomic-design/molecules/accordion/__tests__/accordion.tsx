import { Wrapper, createTree } from "@evernest/dev-helpers";
import { mount } from "enzyme";
import React from "react";
import { Accordion, StyledPanel, StyledButton } from "../src";

test("Accordion renders title", () => {
	const text = "Title";
	const wrapper = mount(
		<Wrapper>
			<Accordion title="Title" />
		</Wrapper>
	);
	expect(wrapper.find("[data-test-id='styled-inner-button-wrapper-label']").at(0).text()).toEqual(
		text
	);
});

test("Accordion renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Accordion title="Title">{text}</Accordion>
		</Wrapper>
	);
	expect(wrapper.find(StyledPanel).text()).toEqual(text);
});

test("Accordion matches snapshot", () => {
	const closed = createTree(
		<Wrapper>
			<Accordion title="Title">content</Accordion>
		</Wrapper>
	);
	expect(closed).toMatchSnapshot();
});

test("Accordion prop 'expanded' toggles on click", () => {
	const wrapper = mount(
		<Wrapper>
			<Accordion title="Title" />
		</Wrapper>
	);
	const button = wrapper.find(StyledButton);

	button.simulate("click");
	expect(wrapper.find(StyledPanel).props().expanded).toEqual(true);

	button.simulate("click");
	expect(wrapper.find(StyledPanel).props().expanded).toEqual(false);
});
