import React from "react";
import { mount } from "enzyme";
import { Wrapper, Code } from "../src";

test("Wrapper renders children", () => {
	const code = "const a = 'a'";
	const wrapper = mount(
		<Wrapper>
			<Code code={code} />
		</Wrapper>
	);
	expect(wrapper.find(Code).text()).toEqual(code);
});
