const path = require("path");
const packages = require("../package-names.json");

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
	stories: ["../**/stories/*.stories.(tsx|mdx)"],
	addons: [
		"@storybook/addon-a11y/register",
		"@storybook/addon-viewport/register",
		"@storybook/addon-knobs/register",
		"@storybook/addon-backgrounds/register",
		"@storybook/addon-jest/register",
		"@storybook/addon-links/register",
		"@storybook/addon-docs",
		"storybook-mobile",
	],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("babel-loader"),
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript",
							"@babel/preset-react",
						],
						plugins: ["@emotion/babel-plugin"],
					},
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
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			...makeAlias("utils", packages.utils),
			...makeAlias("atoms", packages.atoms),
			...makeAlias("molecules", packages.molecules),
			...makeAlias("organisms", packages.organisms),
		};
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
