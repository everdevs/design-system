const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const json = require("@rollup/plugin-json");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");

const createBanner = ({ name, version, author, repository, license }) => `/*!
 * Copyright (c) ${typeof author === "object" ? author.name : author}
 * @author ${typeof author === "object" ? author.name : author}
 * @license ${license}
 * @name ${name}
 * @version ${version}
 *${
		repository
			? ` @see ${typeof repository === "object" ? repository.url : repository}\n */`
			: "/"
 }`;

module.exports = () => {
	const cwd = process.cwd();
	const pkg = require(path.resolve(cwd, "package.json"));
	const inputs = pkg.files.filter(name => name.endsWith(".js"));
	const tsconfig = path.resolve(cwd, "tsconfig.json");
	const builds = inputs.map(input => ({
		input: `src/${input}`.replace(".js", ".ts"),
		external: [...Object.keys(pkg.dependencies || {})],
		output: [
			{
				banner: createBanner(pkg),
				file: `dist/${input}`,
				format: "cjs",
			},
			{
				banner: createBanner(pkg),
				file: `dist/esm/${input}`,
				format: "esm",
			},
		],
		plugins: [commonjs(), json(), babel({ babelHelpers: "bundled" }), typescript({ tsconfig })],
	}));
	return builds;
};
