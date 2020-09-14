import React from "react";
import { mount } from "enzyme";
import { Tpl } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Tpl renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Tpl>{text}</Tpl>
		</Wrapper>
	);
	expect(wrapper.find(Tpl).text()).toEqual(text);
});

test("Tpl allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Tpl className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Tpl)).toHaveClassName(className);
});
