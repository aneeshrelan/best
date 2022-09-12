import fs from "fs";

import { TestResult } from "../types/TestResult";

export const runTest = async (testFile: string): Promise<TestResult> => {
  const code = await fs.promises.readFile(testFile, "utf8");
  let testResult: TestResult = {
    success: false,
    errorMessage: "",
  };

  try {
    const { handler } = await import(testFile);
    console.log(handler);
    await handler();

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
