import fs from "fs";
import pify from "pify";

const { readFile, writeFile } = pify(fs);

(async () => {
	// If Operating System is Windows, fix Husky for Yarn
	if (process.platform === "win32") {
		const huskyScript = await readFile(".git/hooks/husky.sh", "utf-8");
		const fixedHuskyScript = huskyScript.replace(
			"run_command yarn run --silent;;",
			"run_command npx --no-install;;"
		);
		await writeFile(".git/hooks/husky.sh", fixedHuskyScript);
	}
})();
