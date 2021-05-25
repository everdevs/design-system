const path = require("path");
const packages = require("../package-names.json");

// Due to missing support for emotion 11 we need to hack this.
// @see https://github.com/storybookjs/storybook/issues/13145
const toPath = path_ => path.join(process.cwd(), path_);

function makeAlias(dir, names, atomic) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`@evernest/${name}`]: path.resolve(
				__dirname,
				atomic ? "../atomic-design" : "..",
				dir,
				name,
				"src"
			),
		}),
		{}
	);
}

module.exports = {
	stories: [
		"../atomic-design/*/*/stories/*.stories.tsx",
		"../atomic-design/*/*/stories/*.stories.mdx",
	],
	features: {
		postcss: false,
	},
	core: {
		builder: "webpack5",
	},
	addons: [
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-viewport",
		"@storybook/addon-backgrounds",
		"@storybook/addon-jest",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
	],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("react-docgen-typescript-loader"),
					options: {
						// Provide the path to your tsconfig.json so that your stories can
						// display types from outside each individual story.
						tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
					},
				},
			],
		});
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// @see https://github.com/storybookjs/storybook/issues/13145
			"@emotion/core": toPath("node_modules/@emotion/react"),
			"@emotion/styled": toPath("node_modules/@emotion/styled"),
			"emotion-theming": toPath("node_modules/@emotion/react"),
			...makeAlias("utils", packages.utils),
			...makeAlias("ions", packages.ions, true),
			...makeAlias("atoms", packages.atoms, true),
			...makeAlias("molecules", packages.molecules, true),
			...makeAlias("organisms", packages.organisms, true),
			...makeAlias("templates", packages.templates, true),
		};
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
