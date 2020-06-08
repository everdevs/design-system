module.exports = {
	...require("./utils/toolchain/jest.config"),
	moduleNameMapper: {
		"^@evernest/icons": "<rootDir>/atoms/icons/src",
	},
};
