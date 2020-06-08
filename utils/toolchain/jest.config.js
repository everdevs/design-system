module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["/dist/"],
	verbose: true,
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
	moduleNameMapper: {
		"^@evernest/icons": "<rootDir>/../../atoms/icons/src",
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
