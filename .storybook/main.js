const path = require("path");

function makeAlias(dir, names) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`@evernest/${name}`]: path.resolve(__dirname, `../${dir}/${name}/src`),
		}),
		{}
	);
}

module.exports = {
	stories: ["../**/stories/*.(ts|md)x"],
	addons: [
		"@storybook/addon-a11y/register",
		"@storybook/addon-viewport/register",
		"@storybook/addon-knobs/register",
		"@storybook/addon-backgrounds/register",
		"@storybook/addon-jest/register",
		"@storybook/addon-links/register",
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
	webpackFinal: async config => ({
		...config,
		resolve: {
			...(config.resolve || {}),
			alias: {
				...(config.resolve.alias || {}),
				// make sure the local packages can be found without building them
				...makeAlias("utils", ["storybook", "theme", "tokens"]),
				...makeAlias("atoms", ["icons", "icon", "button"]),
			},
		},
		module: {
			...(config.module || {}),
			rules: [
				...(config.module.rules || []),
				{
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
				},
			],
		},
	}),
};
