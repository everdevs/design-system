import React from "react";
import { mount } from "enzyme";
import { HeaderLink } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("HeaderLink renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<HeaderLink>{text}</HeaderLink>
		</Wrapper>
	);
	expect(wrapper.find(HeaderLink).text()).toEqual(text);
});

test("HeaderLink allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<HeaderLink className={className} />
		</Wrapper>
	);
	expect(wrapper.find(HeaderLink)).toHaveClassName(className);
});
