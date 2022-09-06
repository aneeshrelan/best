type TestResultSuccess = {
  success: true;
  errorMessage: null;
};

type TestResultFailure = {
  success: false;
  errorMessage: string;
};

export type TestResult = TestResultSuccess | TestResultFailure;
