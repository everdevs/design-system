import { Wrapper } from "@evernest/dev-helpers";
import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { Anchor, Panel, StyledBackdrop } from "../src";
import { theme } from "@evernest/theme";

test("Panel renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Panel anchor={Anchor.left}>{text}</Panel>
		</Wrapper>
	);
	expect(wrapper.find(Panel).text()).toEqual(text);
});

test("Panel allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Panel anchor={Anchor.left} className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Panel)).toHaveClassName(className);
});

test("Panel can be open or closed", () => {
	const opened = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.left} open />
			</Wrapper>
		)
		.toJSON();
	const closed = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.left} />
			</Wrapper>
		)
		.toJSON();
	expect(opened).toMatchSnapshot();
	expect(closed).toMatchSnapshot();
});

test("Panel can anchored to different positions", () => {
	const leftClosed = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.left} />
			</Wrapper>
		)
		.toJSON();
	const rightClosed = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.right} />
			</Wrapper>
		)
		.toJSON();
	const topClosed = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.top} />
			</Wrapper>
		)
		.toJSON();
	const bottomClosed = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.bottom} />
			</Wrapper>
		)
		.toJSON();
	const leftOpen = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.left} open />
			</Wrapper>
		)
		.toJSON();
	const rightOpen = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.right} open />
			</Wrapper>
		)
		.toJSON();
	const topOpen = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.top} open />
			</Wrapper>
		)
		.toJSON();
	const bottomOpen = renderer
		.create(
			<Wrapper>
				<Panel anchor={Anchor.bottom} open />
			</Wrapper>
		)
		.toJSON();
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
