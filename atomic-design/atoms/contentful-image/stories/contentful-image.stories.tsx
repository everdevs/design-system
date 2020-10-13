import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { ContentfulImage, ContentfulImageProps } from "../src";

const Template: Story<ContentfulImageProps> = args => {
	return <ContentfulImage {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	src:
		"//images.ctfassets.net/vij0xfkj6nfm/65B2DBSyhcTksD4H9nuGds/a3be81862610240ee35085e63835f531/007-web-1000px.jpg",
	width: 1000,
	height: 667,
	alt: "placeholder image",
};

const story: Meta = {
	component: ContentfulImage,
	title: "Design System/Atoms/Contentful image",
	decorators: [withWrapper()],
	parameters: {
		jest: ["contentful-image"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
