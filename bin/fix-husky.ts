import fs from "fs";
import path from "path";
import pify from "pify";

const { readFile, writeFile } = pify(fs);

(async () => {
	// If Operating System is Windows, fix Husky for Yarn
	if (process.platform === "win32") {
		const cwd = process.cwd();
		const huskyFile = path.resolve(cwd, ".git/hooks/husky.sh");
		const huskyScript = await readFile(huskyFile, "utf-8");
		const fixedHuskyScript = huskyScript.replace(
			"run_command yarn run --silent;;",
			"run_command npx --no-install;;"
		);
		await writeFile(huskyFile, fixedHuskyScript);
	}
})();
