import { Wrapper } from "@evernest/storybook";
import { withA11y } from "@storybook/addon-a11y";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import humanize from "humanize-string";
import React from "react";
import { Button, Size } from "../src";
import results from "./button.testresults.json";
import { button } from "@evernest/tokens";

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

const sizeOptions = Object.entries(Size).reduce((previousValue, [key, value]) => {
	return { ...previousValue, [humanize(key)]: value };
}, {});

export const simple: React.FC = () => {
	const size = select("Button Size", sizeOptions, Size.medium) as Size;
	const label = text("Button Label", "Default Button");
	return (
		<Wrapper>
			<Button size={size}>{label}</Button>
			<Button size={size} token={button.secondary}>
				{label}
			</Button>
			<Button size={size} token={button.primary}>
				{label}
			</Button>
		</Wrapper>
	);
};
