function makeAlias(dir, names) {
	return names.reduce((previousValue, name) => ({
		...previousValue,
		[`^@evernest/${name}`]: `<rootDir>/${dir}/${name}/src`,
	}), {});
}

module.exports = {
	...require("./utils/toolchain/jest.config"),
	moduleNameMapper: {
		...makeAlias("utils", ["storybook", "theme", "tokens"]),
		...makeAlias("atoms", ["icons", "icon", "button"]),
	}
};
