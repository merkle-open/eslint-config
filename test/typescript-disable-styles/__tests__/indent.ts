(async () => {
  type ReadOnly<TSomeType extends object> = {readonly [TKey in keyof TSomeType]: TSomeType[TKey]};
})();
