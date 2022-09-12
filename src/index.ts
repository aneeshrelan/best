import { relative } from "path";

import { glob } from "glob";
import chalk from "chalk";

import { runTest } from "./runTest";
import "./global";

const root = process.cwd();

const testFiles = glob.sync(
  process.argv[2] ? `**/${process.argv[2]}` : "**/*.test.ts",
  { absolute: true }
);

let hasFailed = false;

(async () => {
  for await (const testFile of testFiles) {
    const { success, errorMessage } = await runTest(testFile);

    const status = success
      ? chalk.green.inverse(" PASS ")
      : chalk.red.inverse(" FAIL ");

    console.log(`${status} ${chalk.dim(relative(root, testFile))}`);

    if (!success) {
      hasFailed = true;
      console.log(`  ${errorMessage}`);
    }
  }

  if (hasFailed) {
    process.exit(1);
  }
})();
