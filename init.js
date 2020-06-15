const globby = require("globby");
const pify = require("pify");
const path = require("path");
const fs = require("fs");
const writeFile = pify(fs.writeFile);

function makeAlias(dir, names) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`@evernest/${name}`]: [`./${dir}/${name}/src`],
		}),
		{}
	);
}

async function getNames() {
	const atoms = (await globby("./atoms/*/package.json")).map(
		atom => path.parse(atom).dir.split("/").reverse()[0]
	);
	const molecules = (await globby("./molecules/*/package.json")).map(
		molecule => path.parse(molecule).dir.split("/").reverse()[0]
	);
	const organisms = (await globby("./organisms/*/package.json")).map(
		organism => path.parse(organism).dir.split("/").reverse()[0]
	);
	const utils = (await globby("./utils/*/package.json")).map(
		util => path.parse(util).dir.split("/").reverse()[0]
	);
	return { atoms, molecules, organisms, utils };
}

getNames().then(async names => {
	await writeFile(path.resolve(__dirname, "package-names.json"), JSON.stringify(names, null, 4));
	console.log("Generated package names as JSON");
	const tsconfig = require("./tsconfig.json");
	await writeFile(
		path.resolve(__dirname, "tsconfig.json"),
		JSON.stringify(
			{
				...tsconfig,
				compilerOptions: {
					...tsconfig.compilerOptions,
					paths: {
						...makeAlias("utils", names.utils),
						...makeAlias("atoms", names.atoms),
						...makeAlias("molecules", names.molecules),
						...makeAlias("organisms", names.organisms),
					},
				},
			},
			null,
			4
		)
	);
	console.log("Added package aliases to tsconfig");
});
