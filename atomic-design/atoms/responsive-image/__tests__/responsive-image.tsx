import { createTree, Wrapper } from "@evernest/dev-helpers";
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
