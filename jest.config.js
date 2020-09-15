const path = require("path");
const packages = require("./package-names.json");

function makeAlias(dir, names) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`^@evernest/${name}`]: path.resolve(__dirname, `./${dir}/${name}/src`),
		}),
		{}
	);
}

module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["/dist/"],
	verbose: false,
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
	moduleNameMapper: {
		...makeAlias("utils", packages.utils),
		...makeAlias("ions", packages.ions),
		...makeAlias("atoms", packages.atoms),
		...makeAlias("molecules", packages.molecules),
		...makeAlias("organisms", packages.organisms),
		...makeAlias("layout", packages.layout),
	},
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)",
	],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			tsConfig: "./tsconfig.json",
		},
	},
};
