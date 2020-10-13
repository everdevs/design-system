import { createTree, Wrapper } from "@evernest/dev-helpers";
import { mount } from "enzyme";
import React from "react";
import { ResponsiveImage } from "../src";

const image = {
	url:
		"//images.ctfassets.net/vij0xfkj6nfm/65B2DBSyhcTksD4H9nuGds/a3be81862610240ee35085e63835f531/007-web-1000px.jpg",
	width: 1000,
	height: 667,
	title: "placeholder image",
};

test("ResponsiveImage renders", () => {
	const tree = createTree(
		<Wrapper>
			<ResponsiveImage image={image} />
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("ResponsiveImage mounts", () => {
	const wrapper = mount(
		<Wrapper>
			<ResponsiveImage image={image} />
		</Wrapper>
	);
	expect(wrapper.find(ResponsiveImage));
});

test("ResponsiveImage calls onLoad", () => {
	const callback = jest.fn(() => {});
	const wrapper = mount(
		<Wrapper>
			<ResponsiveImage image={image} onLoad={callback} />
		</Wrapper>
	);
	wrapper.find("img").at(1).simulate("load");
	expect(callback.mock.calls.length).toBe(1);
});
