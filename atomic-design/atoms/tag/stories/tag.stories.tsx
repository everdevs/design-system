import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Tag } from "../src";

const Template: Story = args => {
	return <Tag {...args} text="New" />;
};

export const Simple = Template.bind({});

const story: Meta = {
	component: Tag,
	title: "Design System/Atoms/Tag",
	decorators: [withWrapper()],
	parameters: {
		jest: ["tag"],
	},
	argTypes: {
		theme: { control: false },
	},
};

export default story;
