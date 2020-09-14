import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Tpl } from "../src";
import results from "./tpl.testresults.json";

export const Simple: Story = () => {
	return (
		<>
			<Tpl />
		</>
	);
};

const story: Meta = {
	component: Tpl,
	title: "Design System/{type}/{tpl}",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["tpl"],
		docs: { page: null },
	},
};

export default story;
