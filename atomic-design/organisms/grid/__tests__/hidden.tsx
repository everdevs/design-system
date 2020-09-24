import React from "react";
import { mount } from "enzyme";
import { Hidden, HiddenProps } from "../src";
import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";

const ThemedHidden = withTheme<HiddenProps>(Hidden, theme);
test("Hidden renders children", () => {
	const text = "Hello Hidden";
	const wrapper = mount(<ThemedHidden>{text}</ThemedHidden>);
	expect(wrapper.text()).toEqual(text);
});

test("Hidden allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedHidden className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Hidden can show/hide content on different viewports", () => {
	const s = createTree(<ThemedHidden s />);
	expect(s).toMatchSnapshot();
	const m = createTree(<ThemedHidden s />);
	expect(m).toMatchSnapshot();
	const l = createTree(<ThemedHidden s />);
	expect(l).toMatchSnapshot();
	const sm = createTree(<ThemedHidden s m />);
	expect(sm).toMatchSnapshot();
	const sl = createTree(<ThemedHidden s l />);
	expect(sl).toMatchSnapshot();
	const ml = createTree(<ThemedHidden m l />);
	expect(ml).toMatchSnapshot();
});
