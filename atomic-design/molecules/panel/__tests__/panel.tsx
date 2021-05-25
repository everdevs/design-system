import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { Anchor, Panel, StyledPanelProps } from "../src";

const ThemedPanel = withTheme<StyledPanelProps>(Panel, theme);

test("Panel renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(<ThemedPanel anchor={Anchor.left}>{text}</ThemedPanel>);
	expect(wrapper.text()).toEqual(text);
});

test("Panel allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedPanel anchor={Anchor.left} className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("Panel can be open or closed", () => {
	const opened = renderer.create(<ThemedPanel anchor={Anchor.left} open />).toJSON();
	const closed = renderer.create(<ThemedPanel anchor={Anchor.left} />).toJSON();
	expect(opened).toMatchSnapshot();
	expect(closed).toMatchSnapshot();
});

test("Panel can anchored to different positions", () => {
	const leftClosed = createTree(<ThemedPanel anchor={Anchor.left} />);
	const rightClosed = createTree(<ThemedPanel anchor={Anchor.right} />);
	const topClosed = createTree(<ThemedPanel anchor={Anchor.top} />);
	const bottomClosed = createTree(<ThemedPanel anchor={Anchor.bottom} />);
	const leftOpen = createTree(<ThemedPanel anchor={Anchor.left} open />);
	const rightOpen = createTree(<ThemedPanel anchor={Anchor.right} open />);
	const topOpen = createTree(<ThemedPanel anchor={Anchor.top} open />);
	const bottomOpen = createTree(<ThemedPanel anchor={Anchor.bottom} open />);

	expect(leftClosed).toMatchSnapshot();
	expect(rightClosed).toMatchSnapshot();
	expect(topClosed).toMatchSnapshot();
	expect(bottomClosed).toMatchSnapshot();
	expect(leftOpen).toMatchSnapshot();
	expect(rightOpen).toMatchSnapshot();
	expect(topOpen).toMatchSnapshot();
	expect(bottomOpen).toMatchSnapshot();
});

test("Panel allows the open property to be toggled", () => {
	const wrapper = mount(<Panel anchor={Anchor.left} theme={theme} />);
	expect(wrapper.props().open).toEqual(undefined);
	wrapper.setProps({ open: false });
	expect(wrapper.find(Panel).props().open).toEqual(false);
	wrapper.setProps({ open: true });
	expect(wrapper.find(Panel).props().open).toEqual(true);
});

test("Panel allows the anchor property to be changed", () => {
	const wrapper = mount(<Panel anchor={Anchor.left} theme={theme} />);
	expect(wrapper.props().anchor).toEqual(Anchor.left);
	wrapper.setProps({ anchor: Anchor.right });
	expect(wrapper.props().anchor).toEqual(Anchor.right);
	wrapper.setProps({ anchor: Anchor.top });
	expect(wrapper.props().anchor).toEqual(Anchor.top);
	wrapper.setProps({ anchor: Anchor.top });
	expect(wrapper.props().anchor).toEqual(Anchor.top);
});

test("Clicking the backdrop calls the onClose callback", () => {
	const callback = jest.fn(() => {});
	const wrapper = mount(
		<Panel anchor={Anchor.left} theme={theme} open={true} onClose={callback} />
	);
	wrapper.find("[data-test-id='styled-backdrop']").at(0).simulate("click");
	expect(callback.mock.calls.length).toBe(1);
});
