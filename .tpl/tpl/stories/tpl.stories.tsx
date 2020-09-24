import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Tpl } from "../src";

const Template: Story = args => {
	return <Tpl {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Tpl",
};

const story: Meta = {
	component: Tpl,
	title: "Design System/{type}/{tpl}",
	decorators: [withWrapper()],
	parameters: {
		jest: ["tpl"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
