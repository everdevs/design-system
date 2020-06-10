const path = require("path");

function makeAlias(dir, names) {
	return names.reduce((previousValue, name) => ({
		...previousValue,
		[`^@evernest/${name}`]: path.resolve(__dirname, `<rootDir>/../../../${dir}/${name}/src`),
	}), {});
}

module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["/dist/"],
	verbose: true,
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
	moduleNameMapper: {
		...makeAlias("utils", ["storybook", "theme", "tokens"]),
		...makeAlias("atoms", ["icons", "icon", "button"]),
	},
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)",
	],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json",
		},
	},
};
