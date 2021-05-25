import React from "react";
import { mount } from "enzyme";
import { GridOverlay } from "../src";
import { createTree, Wrapper } from "@evernest/dev-helpers";

test("GridOverlay can be initially active", () => {
	const tree = createTree(
		<Wrapper>
			<GridOverlay initialActive />
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("GridOverlay can have position absolute", () => {
	const tree = createTree(
		<Wrapper>
			<GridOverlay position="absolute" />
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("GridOverlay can have a toggle button", () => {
	const tree = createTree(
		<Wrapper>
			<GridOverlay toggle />
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
	const wrapper = mount(
		<Wrapper>
			<GridOverlay toggle />
		</Wrapper>
	);
	wrapper.contains("[data-test-id='grid-toggle']");
});

test("GridOverlay can be toggled", () => {
	const wrapper = mount(
		<Wrapper>
			<GridOverlay toggle />
		</Wrapper>
	);
	const toggle = wrapper.find("[data-test-id='grid-toggle']").at(0);
	expect(toggle.text()).toEqual("grid");
	toggle.simulate("click");
	expect(toggle.text()).toEqual("gridOff");
});
