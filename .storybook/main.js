const path = require("path");

module.exports = {
	stories: ["../**/stories/*.(ts|md)x"],
	addons: [
		"@storybook/addon-a11y/register",
		"@storybook/addon-viewport/register",
		"@storybook/addon-knobs/register",
		"@storybook/addon-backgrounds/register",
		"@storybook/addon-jest/register",
		"@storybook/addon-links",
		"@storybook/addon-docs",
		{
			name: "@storybook/preset-typescript",
			options: {
				tsDocgenLoaderOptions: {
					tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
				},
				tsLoaderOptions: {
					configFile: path.resolve(__dirname, "../tsconfig.json"),
					transpileOnly: true,
				},
			},
		},
	],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("ts-loader"),
				},
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

		config.resolve.alias = config.resolve.alias || {};
		config.resolve.alias["@evernest/storybook"] = path.resolve(__dirname, '../utils/storybook/src');
		config.resolve.alias["@evernest/icons"] = path.resolve(__dirname, '../atoms/icons/src');
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
