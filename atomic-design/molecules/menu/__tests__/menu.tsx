import React from "react";
import { mount } from "enzyme";
import { Menu, MenuDirection, StyledMenuProps } from "../src";
import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";

const ThemedMenu = withTheme<StyledMenuProps>(Menu, theme);

test("Menu only renders children", () => {
	const text = "Hello Grid";
	const wrapper = mount(<ThemedMenu>{text}</ThemedMenu>);
	expect(wrapper.text()).toEqual(text);
});

test("Menu allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedMenu className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Menu can be vertical or horizontal", () => {
	const vertical = createTree(<ThemedMenu direction={MenuDirection.vertical} />);
	const horizontal = createTree(<ThemedMenu direction={MenuDirection.horizontal} />);
	expect(vertical).toMatchSnapshot();
	expect(horizontal).toMatchSnapshot();
});
