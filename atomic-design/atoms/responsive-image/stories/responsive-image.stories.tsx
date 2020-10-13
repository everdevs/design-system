import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { ResponsiveImage, ResponsiveImageProps } from "../src";

const image = {
	url:
		"//images.ctfassets.net/vij0xfkj6nfm/65B2DBSyhcTksD4H9nuGds/a3be81862610240ee35085e63835f531/007-web-1000px.jpg",
	width: 1000,
	height: 667,
	title: "placeholder image",
};

const Template: Story<ResponsiveImageProps> = args => {
	return <ResponsiveImage {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	image,
};

const story: Meta = {
	component: ResponsiveImage,
	title: "Design System/Atoms/Responsive image",
	decorators: [withWrapper()],
	parameters: {
		jest: ["responsive-image"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
