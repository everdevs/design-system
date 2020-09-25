import React from "react";
import { mount } from "enzyme";
import { Accordion } from "../src";
import { createTree, withTheme } from "@evernest/dev-helpers";

test("Accordion renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(<Accordion>{text}</Accordion>);
	expect(wrapper.find(Accordion).text()).toEqual(text);
});

test("Accordion allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<Accordion className={className} />);
	expect(wrapper.find(Accordion)).toHaveClassName(className);
});
