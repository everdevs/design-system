import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

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
	a11y,
});

addDecorator(withA11y);
