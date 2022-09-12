async function _test(name: string, fn: () => Promise<void>): Promise<void> {
  console.log(`Running ${name}`);
  await fn();
  console.log("Finished");
}

declare var test: typeof _test;

const _global = global;
_global.test = _test;
