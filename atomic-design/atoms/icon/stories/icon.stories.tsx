import React from "react";
import { Story } from "@storybook/react";
import { withWrapper } from "@evernest/dev-helpers";
import { Icon, IconProps, Size } from "../src";

const Template: Story<IconProps> = args => {
	return <Icon {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	icon: "instagram",
	size: Size.medium,
};

export const ARIAHidden = Template.bind({});

ARIAHidden.args = {
	icon: "chevronDown",
	size: Size.medium,
	"aria-hidden": true,
};

const story = {
	component: Icon,
	title: "Design System/Atoms/Icon",
	decorators: [withWrapper()],
	parameters: {
		jest: ["icon"],
	},
};

export default story;
