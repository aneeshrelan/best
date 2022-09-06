import glob from "glob"

const testFiles = glob.sync("**/*.test.ts");

console.log(testFiles);