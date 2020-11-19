import React from "react";
import { createTree } from "@evernest/dev-helpers";
import { mount } from "enzyme";
import { Icon, Size } from "../src";

test("Icon contains text", () => {
	const wrapper = mount(
		<div>
			<Icon size={Size.medium} icon="instagram" />
		</div>
	);
	expect(wrapper.find(Icon).text()).toEqual("Instagram");
});

test("Icon allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<div>
			<Icon className={className} size={Size.medium} icon="instagram" />
		</div>
	);
	expect(wrapper.find(Icon)).toHaveClassName(className);
});

test("Icon should pass props", () => {
	const wrapper = mount(
		<div>
			<Icon size={Size.medium} icon="instagram" aria-hidden="true" />
		</div>
	);

	expect(wrapper.find(Icon).props()["aria-hidden"]).toEqual("true");
});

test("Icon should pass props matches snapshot", () => {
	const wrapper = createTree(
		<div>
			<Icon size={Size.medium} icon="instagram" aria-hidden="true" />
		</div>
	);
	expect(wrapper).toMatchSnapshot();
});
