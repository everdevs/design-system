import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { FooterLink } from "../src";

const Template: Story = args => {
	return <FooterLink {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a FooterLink",
};

const story: Meta = {
	component: FooterLink,
	title: "Design System/Atoms/Footer link",
	decorators: [withWrapper()],
	parameters: {
		jest: ["footer-link"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
