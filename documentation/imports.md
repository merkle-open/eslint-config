
## Imports


### [Default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)

> ensure default import coupled with default export


:x: Disabled

<br />



### [Export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

> disallow invalid exports, e.g. multiple defaults


:white_check_mark: Enabled (error)

<br />



### [Extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

> Ensure consistent use of file extension within the import path


:x: Disabled

<br />



### [Imports first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md)

> disallow non-import statements appearing before import statements


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
import foo from './foo';
initWith(foo);
import bar from './bar';
*/

// Good
import foo from './foo';
import bar from './bar';
initWith(foo);

```
<br />



### [Named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

> ensure named imports coupled with named exports


:x: Disabled

<br />



### [Namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)

> enforces names exist at the time they are dereferenced, when imported as a full namespace


:x: Disabled

<br />



### [Newline after import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

> Require a newline after the last import/require in a group


:x: Disabled

<br />



### [No amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)

> disallow AMD require/define


:white_check_mark: Enabled (error)

<br />



### [No commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)

> disallow require()


:x: Disabled

<br />



### [No deprecated](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md)

> disallow use of jsdoc-marked-deprecated imports


:x: Disabled

<br />



### [No duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

> disallow duplicate imports


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
import SomeDefaultClass from './mod';
import foo from './some-other-mod';
import * as names from './mod';
import { something } from './mod.js';
*/

```
<br />



### [No extraneous dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)

> Forbid the use of extraneous packages


:x: Disabled

<br />



### [No mutable exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

> Forbid mutable exports


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
export let count = 2;
let count = 4;
export { count };
*/

```
<br />



### [No named as default member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

> warn on accessing default export property names that are also named exports


:x: Disabled

<br />



### [No named as default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

> do not allow a default import name to match a named export


:x: Disabled

<br />



### [No namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md)

> disallow namespace imports


:x: Disabled

<br />



### [No nodejs modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md)

> No Node.js builtin modules


:x: Disabled

<br />



### [No unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

> ensure imports point to files/modules that can be resolved


:white_check_mark: Enabled (error)

<br />



### [Order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

> Enforce a convention in module import order


:x: Disabled

<br />



### [Prefer default export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

> Require modules with a single export to use a default export


:x: Disabled

<br />


