import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { HeaderLink } from "../src";

const Template: Story = args => {
	return <HeaderLink {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a HeaderLink",
	href: "#",
};

const story: Meta = {
	component: HeaderLink,
	title: "Design System/Atoms/Header link",
	decorators: [withWrapper()],
	parameters: {
		jest: ["header-link"],
	},
	argTypes: {
		children: { control: "text" },
		href: { control: "text" },
		theme: { control: false },
	},
};

export default story;
