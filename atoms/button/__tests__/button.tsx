import React from "react";
import { mount } from "enzyme";
import { Button } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Button renders children", () => {
	const text = "Hello Button";
	const wrapper = mount(
		<Wrapper>
			<Button>{text}</Button>
		</Wrapper>
	);
	expect(wrapper.find(Button).text()).toEqual(text);
});

test("Button allows setting classname", () => {
	const text = "Hello Button";
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Button className={className}>{text}</Button>
		</Wrapper>
	);
	expect(wrapper.find(Button)).toHaveClassName(className);
});
