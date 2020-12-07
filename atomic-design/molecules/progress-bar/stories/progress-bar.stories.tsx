import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { ProgressBar } from "../src";

const Template: Story = args => {
	return <ProgressBar label="Step 1 of 3" current={2} segments={3} {...args} />;
};

export const Simple = Template.bind({});

const story: Meta = {
	component: ProgressBar,
	title: "Design System/Molecules/Progress bar",
	decorators: [withWrapper()],
	parameters: {
		jest: ["progress-bar"],
	},
	argTypes: {
		theme: { control: false },
	},
};

export default story;
