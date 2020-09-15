import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { HeaderLink } from "../src";
import results from "./header-link.testresults.json";

const Template: Story = args => {
	return <HeaderLink {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a HeaderLink",
};

const story: Meta = {
	component: HeaderLink,
	title: "Design System/Atoms/Header link",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["header-link"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
