import React from "react";
import { mount } from "enzyme";
import { Box, BoxProps } from "../src";
import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";

const ThemedBox = withTheme<BoxProps>(Box, theme);
test("Box renders children", () => {
	const text = "Hello Row";
	const wrapper = mount(<ThemedBox>{text}</ThemedBox>);
	expect(wrapper.text()).toEqual(text);
});

test("Box allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedBox className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Box can remove gutter", () => {
	const tree = createTree(<ThemedBox removeGutter />);
	expect(tree).toMatchSnapshot();
});

test("Box can add gutter", () => {
	const tree = createTree(<ThemedBox addGutter />);
	expect(tree).toMatchSnapshot();
});

test("Box can remove padding", () => {
	const tree = createTree(<ThemedBox removePadding />);
	expect(tree).toMatchSnapshot();
});

test("Box can add padding and gutter", () => {
	const tree = createTree(<ThemedBox addPadding addGutter />);
	expect(tree).toMatchSnapshot();
});

test("Box can remove padding and gutter", () => {
	const tree = createTree(<ThemedBox removeGutter removePadding />);
	expect(tree).toMatchSnapshot();
});

test("Box can add gutter", () => {
	const tree = createTree(<ThemedBox addGutter />);
	expect(tree).toMatchSnapshot();
});

test("Box can be flex", () => {
	const tree = createTree(<ThemedBox flex />);
	expect(tree).toMatchSnapshot();
});
