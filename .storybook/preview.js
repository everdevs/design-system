import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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
	// docs: { inlineStories: false },
});

addDecorator(withA11y);
addDecorator(withKnobs);
