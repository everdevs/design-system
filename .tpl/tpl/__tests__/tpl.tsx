import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { mount } from "enzyme";
import React from "react";
import { Tpl, StyledTplProps } from "../src";

const ThemedTpl = withTheme<StyledTplProps>(Tpl, theme);

test("Tpl renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(<ThemedTpl>{text}</ThemedTpl>);
	expect(wrapper.text()).toEqual(text);
});

test("Tpl allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedTpl className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Tpl matches the snapshot", () => {
	const tree = createTree(<ThemedTpl />);
	expect(tree).toMatchSnapshot();
});
