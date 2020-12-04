import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import React from "react";
import { Separator, StyledSeparatorProps } from "../src";
import { mount } from "enzyme";

const ThemedSeparator = withTheme<StyledSeparatorProps>(Separator, theme);

test("Separator allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedSeparator className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Separator matches the snapshot", () => {
	const tree = createTree(<ThemedSeparator />);
	expect(tree).toMatchSnapshot();
});
