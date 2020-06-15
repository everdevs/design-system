import { create } from "@storybook/theming/create";

export default create({
	base: "light",

	colorPrimary: "#000",
	colorSecondary: "#333",

	// UI
	appBg: "#fff",
	appContentBg: "#fff",
	appBorderColor: "#ddd",
	appBorderRadius: 0,

	// Typography
	fontBase: "sans-serif",
	fontCode: "monospace",

	// Text colors
	textColor: "#000",
	textInverseColor: "#fff",

	// Toolbar default and active colors
	barTextColor: "#000",
	barSelectedColor: "#000",
	barBg: "#fff",

	// Form colors
	inputBg: "#fff",
	inputBorder: "#ddd",
	inputTextColor: "#000",
	inputBorderRadius: 0,

	brandTitle: "Evernest",
	brandUrl: "https://github.com/everdevs/design-system",
	brandImage:
		"https://raw.githubusercontent.com/everdevs/frontend/master/public/images/evernest-logo-tagline-black.png?token=AAIYLLV7P5H73GP7PNOUDIC64DT24",
});
