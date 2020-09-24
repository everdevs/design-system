import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { EvernestLogo, LogoSize } from "../src";

const Template: Story = args => {
	return <EvernestLogo {...args} />;
};

export const Small = Template.bind({});

Small.args = {
	size: LogoSize.small,
};

export const Large = Template.bind({});

Large.args = {
	size: LogoSize.large,
};

export const Responsive = Template.bind({});

Responsive.args = {
	size: LogoSize.responsive,
};

const story: Meta = {
	component: EvernestLogo,
	title: "Design System/Atoms/Evernest logo",
	decorators: [withWrapper()],
	parameters: {
		jest: ["evernest-logo"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
