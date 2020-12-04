import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { mount } from "enzyme";
import React from "react";
import { Tag, TagProps } from "../src";

const ThemedTag = withTheme<TagProps>(Tag, theme);

test("Tag allows setting text", () => {
	const wrapper = mount(<ThemedTag text="New" />);
	expect(wrapper.text()).toEqual("New");
});

test("Tag matches the snapshot", () => {
	const tree = createTree(<ThemedTag text="foo" />);
	expect(tree).toMatchSnapshot();
});
