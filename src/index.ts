import { relative } from "path";

import { glob } from "glob";
import chalk from "chalk";

import { runTest } from "./runTest";

const root = process.cwd();
const testFiles = glob.sync("**/*.test.ts", { absolute: true });

(async () => {
  console.log(root);
  for await (const testFile of testFiles) {
    const { success, errorMessage } = await runTest(testFile);

    const status = success
      ? chalk.green.inverse(" PASS ")
      : chalk.red.inverse(" FAIL ");

    console.log(`${status} ${chalk.dim(relative(root, testFile))}`);
    if (!success) {
      console.log(`  ${errorMessage}`);
    }
  }
})();
