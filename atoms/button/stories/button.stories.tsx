import { Wrapper } from "@evernest/dev-helpers";
import { text } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import React from "react";
import { Button } from "../src";
import results from "./button.testresults.json";
import {
	buttonS,
	buttonPrimary,
	buttonSecondary,
	buttonSecondaryS,
	buttonPrimaryS,
} from "@evernest/tokens";

export const simple: React.FC = () => {
	const label = text("Button Label", "Default Button");
	return (
		<Wrapper>
			<Button>{label}</Button>
			<Button token={buttonS}>{label}</Button>
			<br />
			<Button token={buttonPrimary}>{label}</Button>
			<Button token={buttonPrimaryS}>{label}</Button>
			<br />
			<Button token={buttonSecondary}>{label}</Button>
			<Button token={buttonSecondaryS}>{label}</Button>
		</Wrapper>
	);
};

const story = {
	component: Button,
	title: "Design System/Atoms/Button",
	decorators: [withTests({ results })],
	parameters: {
		jest: ["button"],
	},
};

export default story;
