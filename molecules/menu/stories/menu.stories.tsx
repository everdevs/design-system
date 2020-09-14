import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Menu } from "../src";
import results from "./menu.testresults.json";

export const Simple: Story = () => {
	return (
		<>
			<Menu />
		</>
	);
};

const story: Meta = {
	component: Menu,
	title: "Design System/Molecules/Menu",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["menu"],
		docs: { page: null },
	},
};

export default story;
