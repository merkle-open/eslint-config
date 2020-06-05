(async () => {
  type TReadOnly<TSomeType extends string> = {readonly [TKey in keyof TSomeType]: TSomeType[TKey]};
})();
