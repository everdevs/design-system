import React from "react";
import { mount } from "enzyme";
import { ThemedPageWithStyles } from "../src";
import { createTree } from "@evernest/dev-helpers";

test("ThemedPageWithStyles renders children", () => {
	const text = "Hello Page";
	const wrapper = mount(<ThemedPageWithStyles>{text}</ThemedPageWithStyles>);
	expect(wrapper.text()).toEqual(text);
});

test("ThemedPageWithStyles allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedPageWithStyles className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Page renders correctly", () => {
	const tree = createTree(<ThemedPageWithStyles />);
	expect(tree).toMatchSnapshot();
});
