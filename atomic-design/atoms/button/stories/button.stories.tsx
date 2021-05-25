import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button } from "../src";

const Template: Story = args => {
	return <Button {...args} />;
};

export const WithLabel = Template.bind({});

WithLabel.args = {
	children: "I am a Button",
};

const story: Meta = {
	component: Button,
	title: "Design System/Atoms/Button",
	decorators: [withWrapper()],
	parameters: {
		jest: ["button"],
	},
	argTypes: {
		children: { control: "text" },
		variation: { control: "select" },
		size: { control: "select" },
		theme: { control: false },
	},
};

export default story;
