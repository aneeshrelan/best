import { TestResult } from "../types/TestResult";

export const runTest = async (testFile: string): Promise<TestResult> => {
  let testResult: TestResult = {
    success: false,
    errorMessage: "",
  };

  try {
    await import(testFile);
    await testInAction[0]();
    testInAction = [];

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
