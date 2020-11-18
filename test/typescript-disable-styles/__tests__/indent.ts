/* eslint-disable @typescript-eslint/no-unused-vars */
(async () => {
  type TReadOnly<TSomeType extends string> = {readonly [TKey in keyof TSomeType]: TSomeType[TKey]};
})();
