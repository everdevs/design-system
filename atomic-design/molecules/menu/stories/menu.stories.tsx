import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Menu } from "../src";

export const Simple: Story = () => {
	return <Menu />;
};

const story: Meta = {
	component: Menu,
	title: "Design System/Molecules/Menu",
	decorators: [withWrapper()],
	parameters: {
		jest: ["menu"],
		docs: { page: null },
	},
};

export default story;
