import { Wrapper } from "@evernest/storybook";
import { withA11y } from "@storybook/addon-a11y";
import { text, withKnobs } from "@storybook/addon-knobs";
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

export default {
	component: Button,
	title: "Atoms/Button",
	decorators: [withA11y, withKnobs, withTests({ results })],
	parameters: {
		backgrounds: [
			{ name: "dark", value: "#333", default: true },
			{ name: "light", value: "#ccc" },
		],
		jest: ["button"],
	},
};

export const simple: React.FC = () => {
	const label = text("Button Label", "Default Button");
	return (
		<Wrapper>
			<Button>{label}</Button> <Button token={buttonS}>{label}</Button>
			<br />
			<Button token={buttonPrimary}>{label}</Button>{" "}
			<Button token={buttonPrimaryS}>{label}</Button>
			<br />
			<Button token={buttonSecondary}>{label}</Button>{" "}
			<Button token={buttonSecondaryS}>{label}</Button>
		</Wrapper>
	);
};
