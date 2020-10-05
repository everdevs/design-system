import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Header } from "../src";

const Template: Story = args => {
	return <Header {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Header",
};

const story: Meta = {
	component: Header,
	title: "Design System/Organisms/Header",
	decorators: [withWrapper()],
	parameters: {
		jest: ["header", "utils"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
