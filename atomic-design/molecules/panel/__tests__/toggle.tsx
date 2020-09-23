import { theme } from "@evernest/theme";
import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { Toggle } from "../src";

test("Toggle allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<Toggle className={className} theme={theme} />);
	expect(wrapper.find(Toggle)).toHaveClassName(className);
});

test("Panel can be open or closed", () => {
	const opened = renderer.create(<Toggle open theme={theme} />).toJSON();
	const closed = renderer.create(<Toggle theme={theme} />).toJSON();
	expect(opened).toMatchSnapshot();
	expect(closed).toMatchSnapshot();
});
