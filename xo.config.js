module.exports = {
	extends: ["xo-react", "plugin:prettier/recommended"],
	ignores: ["**/dist"],
	plugins: ["prettier"],
	overrides: [
		{
			files: "**/__tests__/*.{ts,tsx}",
			globals: ["test", "expect"],
			rules: {
				"import/no-extraneous-dependencies": 0,
				"unicorn/no-fn-reference-in-iterator": 0,
			},
		},
		{
			files: "**/*.stories.{ts,tsx}",
			rules: {
				"import/no-extraneous-dependencies": 0,
			},
		},
		{
			files: "**/*.{ts,tsx}",
			rules: {
				"@typescript-eslint/consistent-type-assertions": [
					"warn",
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "allow-as-parameter",
					},
				],
			},
		},
	],
	prettier: true,
	rules: {
		"react/prop-types": 0,
		"unicorn/no-reduce": 0,
		"prettier/prettier": 0,
	},
};
