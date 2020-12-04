import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Separator } from "../src";

const Template: Story = () => {
	return <Separator />;
};

export const Simple = Template.bind({});

const story: Meta = {
	component: Separator,
	title: "Design System/Atoms/Separator",
	decorators: [withWrapper()],
	parameters: {
		jest: ["separator"],
	},
	argTypes: {
		theme: { control: false },
	},
};

export default story;
