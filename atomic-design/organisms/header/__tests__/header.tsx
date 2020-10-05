import React from "react";
import { mount } from "enzyme";
import { Header, StyledHeaderProps } from "../src";
import { createTree, withTheme, Wrapper } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";

const ThemedHeader = withTheme<StyledHeaderProps>(Header, theme);

test("Header renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(<ThemedHeader>{text}</ThemedHeader>);
	expect(wrapper.text()).toEqual(text);
});

test("Header allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedHeader className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Header allows setting fadeOffset", () => {
	const fadeOffset = 100;
	const wrapper = mount(<ThemedHeader translucent fadeOffset={fadeOffset} />);
	expect(wrapper.props().fadeOffset).toEqual(fadeOffset);
});

test("Header can be fixed", () => {
	const tree = createTree(<ThemedHeader fixed />);
	expect(tree).toMatchSnapshot();
});

test("Header can be sticky", () => {
	const tree = createTree(<ThemedHeader sticky />);
	expect(tree).toMatchSnapshot();
});

test("Header can be plain", () => {
	const tree = createTree(<ThemedHeader plain />);
	expect(tree).toMatchSnapshot();
});

test("Header can be translucent", () => {
	const tree = createTree(<ThemedHeader translucent />);
	expect(tree).toMatchSnapshot();
});
