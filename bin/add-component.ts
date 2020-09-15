#!/usr/bin/env node
import fs from "fs";
import { copy, mkdirp } from "fs-extra";
import pify from "pify";
import path from "path";
import pascalcase from "pascalcase";
import { paramCase } from "param-case";
import humanizeString from "humanize-string";
import meow from "meow";

const {
	input: [componentName],
	flags: { atomic },
} = meow(
	`
    Usage
      $ add-component <input>
 
    Options
      --atomic, -a  Atomic type of component
 
    Examples
      $ add-component "My Component" --atomic atoms
`,
	{
		flags: {
			atomic: {
				type: "string",
				alias: "a",
				default: "atoms",
			},
		},
	}
);

const patterns = {
	tpl: /tpl/gm,
	Tpl: /Tpl/gm,
	human: /\{tpl\}/gm,
	type: /\{type\}/gm,
};

const { readFile, writeFile } = pify(fs);
interface File {
	path: string;
	content: string;
}
type Files = Record<string, File>;

async function createComponent(name, { atomic }) {
	const pascalName = pascalcase(name);
	const paramName = paramCase(name);
	const humanName = humanizeString(name);
	const cwd = process.cwd();
	const tpl = path.join(cwd, ".tpl/tpl");
	const dir = path.join(cwd, atomic, paramName);
	const filesToCopy = [
		{ origin: path.join(tpl, "index.js"), destination: path.join(dir, "index.js") },
		{ origin: path.join(tpl, "jest.config.js"), destination: path.join(dir, "jest.config.js") },
		{
			origin: path.join(tpl, "rollup.config.js"),
			destination: path.join(dir, "rollup.config.js"),
		},
		{ origin: path.join(tpl, "tsconfig.json"), destination: path.join(dir, "tsconfig.json") },
	];
	const pkg = await readFile(path.join(tpl, "package.json"), "utf8");
	const types = await readFile(path.join(tpl, "src/types.ts"), "utf8");
	const tsModule = await readFile(path.join(tpl, "src/tpl.tsx"), "utf8");
	const index = await readFile(path.join(tpl, "src/index.ts"), "utf8");
	const test = await readFile(path.join(tpl, "__tests__/tpl.tsx"), "utf8");
	const story = await readFile(path.join(tpl, "stories/tpl.stories.tsx"), "utf8");

	const files: Files = {
		pkg: {
			path: path.join(dir, "package.json"),
			content: pkg.replace(patterns.tpl, paramName),
		},
		types: {
			path: path.join(dir, "src/types.ts"),
			content: types.replace(patterns.Tpl, pascalName),
		},
		tsModule: {
			path: path.join(dir, `src/${paramName}.tsx`),
			content: tsModule.replace(patterns.Tpl, pascalName),
		},
		index: {
			path: path.join(dir, "src/index.ts"),
			content: index.replace(patterns.tpl, paramName),
		},
		test: {
			path: path.join(dir, `__tests__/${paramName}.tsx`),
			content: test.replace(patterns.Tpl, pascalName),
		},
		story: {
			path: path.join(dir, `stories/${paramName}.stories.tsx`),
			content: story
				.replace(patterns.human, humanName)
				.replace(patterns.type, pascalcase(atomic))
				.replace(patterns.Tpl, pascalName)
				.replace(patterns.tpl, paramName),
		},
	};
	await Promise.all(
		Object.entries(files).map(async ([, { path: filePath, content }]) => {
			const { dir } = path.parse(filePath);
			await mkdirp(dir);
			console.log(`Write ${filePath}`);
			return writeFile(filePath, content);
		})
	);
	await Promise.all(
		filesToCopy.map(({ origin, destination }) => {
			console.log(`Copy ${origin} to ${destination}`);
			return copy(origin, destination);
		})
	);
}

console.log("Creating:", componentName, { atomic });
void createComponent(componentName, { atomic });
