import fs from "fs";

import expect_2 from "expect";
import { TestResult } from "../types/test";

export const runTest = async (testFile: string): Promise<TestResult> => {
  const code = await fs.promises.readFile(testFile, "utf8");
  let testResult: TestResult = {
    success: false,
    errorMessage: "",
  };

  try {
    const expect = expect_2;
    eval(code);
    testResult = {
      success: true,
      errorMessage: null,
    };
  } catch (error: unknown) {
    testResult = {
      success: false,
      errorMessage: (error as Error).message,
    };
  }

  return testResult;
};
