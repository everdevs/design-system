import { addDecorator, addParameters } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import results from "../.jest-testresults.json";

const viewport = {
	viewports: {
		mobile1: {
			name: "Mobile",
			styles: {
				width: "320px",
				height: "568px",
			},
			type: "mobile",
		},
		...INITIAL_VIEWPORTS,
	},
};

const backgrounds = {
	default: "light",
	values: [
		{
			name: "light",
			value: "#dedede",
		},
		{
			name: "dark",
			value: "#232323",
		},
	],
};

const a11y = {
	element: "#root *",
};

addParameters({
	backgrounds,
	viewport,
	a11y,
});

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(
	withTests({
		results,
	})
);
