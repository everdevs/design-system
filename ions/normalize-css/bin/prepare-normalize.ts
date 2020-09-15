import fs from "fs";
import path from "path";
import pify from "pify";

const { readFile, writeFile } = pify(fs);

const outFile = path.resolve(__dirname, "../src/normalize-css.ts");
const pathToModule = path.resolve(__dirname, "../../../node_modules/normalize.css");
const pathToPkg = path.resolve(pathToModule, "package.json");
const cleanRegexp = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;

const createModule = (content: string) => `export const normalize = \`
${content}
\`;
`;
async function prepare() {
	const rawPkg = await readFile(pathToPkg, "utf8");
	const pkg = JSON.parse(rawPkg);
	const pathToFile = path.resolve(pathToModule, pkg.main);
	const raw = await readFile(pathToFile, "utf8");
	const css = raw
		.replace(cleanRegexp, "")
		.replace(/^\s*\n/gm, "")
		.replace(/\s+$/gm, "");
	await writeFile(outFile, createModule(css));
	console.log("Generated normalize-css.ts");
}

void prepare();
