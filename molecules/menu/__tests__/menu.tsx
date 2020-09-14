import React from "react";
import { mount } from "enzyme";
import { Menu } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Menu only renders children", () => {
	const text = "Hello Grid";
	const wrapper = mount(
		<Wrapper>
			<Menu>{text}</Menu>
		</Wrapper>
	);
	expect(wrapper.find(Menu).text()).toEqual(text);
});

test("Menu allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Menu className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Menu)).toHaveClassName(className);
});
