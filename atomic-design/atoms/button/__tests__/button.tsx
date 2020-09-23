import { withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { mount } from "enzyme";
import React from "react";
import { Button, ButtonProps } from "../src";

const ThemedButton = withTheme<ButtonProps>(Button, theme);

test("Button renders children", () => {
	const text = "Hello Button";
	const wrapper = mount(<ThemedButton>{text}</ThemedButton>);
	expect(wrapper.text()).toEqual(text);
});

test("Button allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedButton className={className} />);
	expect(wrapper).toHaveClassName(className);
});
