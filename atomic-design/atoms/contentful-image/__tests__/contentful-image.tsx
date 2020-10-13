import { createTree, Wrapper } from "@evernest/dev-helpers";
import { mount } from "enzyme";
import React from "react";
import { ContentfulImage } from "../src";

const imageArgs = {
	src:
		"//images.ctfassets.net/vij0xfkj6nfm/65B2DBSyhcTksD4H9nuGds/a3be81862610240ee35085e63835f531/007-web-1000px.jpg",
	width: 1000,
	height: 667,
	alt: "placeholder image",
};

test("ContentfulImage renders", () => {
	const tree = createTree(
		<Wrapper>
			<ContentfulImage {...imageArgs} />
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("ContentfulImage mounts", () => {
	const wrapper = mount(
		<Wrapper>
			<ContentfulImage {...imageArgs} />
		</Wrapper>
	);
	expect(wrapper.find(ContentfulImage));
});

test("ContentfulImage calls onLoad", () => {
	const callback = jest.fn(() => {});
	const wrapper = mount(
		<Wrapper>
			<ContentfulImage {...imageArgs} onLoad={callback} />
		</Wrapper>
	);
	wrapper.find("img").at(1).simulate("load");
	expect(callback.mock.calls.length).toBe(1);
});
