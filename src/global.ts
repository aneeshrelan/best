let _testInAction: (() => Promise<void>)[] = [];

async function _test(name: string, fn: () => Promise<void>): Promise<void> {
  console.log(`Running ${name}`);
  _testInAction.push(fn);
}

declare var testInAction: typeof _testInAction;
declare var test: typeof _test;

const _global = global;
_global.test = _test;
_global.testInAction = _testInAction;
