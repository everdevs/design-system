import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Footer } from "../src";

const Template: Story = args => {
	return <Footer {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Footer",
};

const story: Meta = {
	component: Footer,
	title: "Design System/Organisms/Footer",
	decorators: [withWrapper()],
	parameters: {
		jest: ["footer"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
