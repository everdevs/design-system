import React from "react";
import { mount } from "enzyme";
import { Wrapper } from "../src";

test("Wrapper renders children", () => {
	const text = "Hello Button";
	const wrapper = mount(<Wrapper>{text}</Wrapper>);
	expect(wrapper.text()).toEqual(text);
});
