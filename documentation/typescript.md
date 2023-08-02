
## Typescript


### [Adjacent overload signatures](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)

> Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
interface IFoo {
	foo(s: string): void;
	foo(n: number): void;
	bar(): void;
	foo(sn: string | number): void;
}
*/
// Good
interface IFoo {
	foo(sn: string | number): void;
	foo(s: string): void;
	foo(n: number): void;
	bar(): void;
}

```
<br />



### [Array type](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md)

> Requires using either T[] or Array<T> for arrays (array-type)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(async () => {
	type A = Array<string>;
})();
*/
// Good
(async () => {
	type A = string[];
})();

```
<br />



### [Ban ts comment](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md)

> Bans // @ts-<directive> comments from being used or requires descriptions after directive (ban-ts-comment)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	if (false) {
		// @ts-expect-error
		console.log('hello');
		// @ts-ignore
		console.log('hello');
		// @ts-nocheck
		console.log('hello');
		// @ts-check
		console.log('hello');
	}
})();
*/

```
<br />



### [Ban types](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md)

> Enforces that types will not to be used (ban-types)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const a: String = 'a';
	const b: Number = 1;
})();
*/
// Good
(() => {
	const a: string = 'a';
	const b: number = 1;
})();

```
<br />



### [Consistent type assertions](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)

> Enforces consistent usage of type assertions. (consistent-type-assertions)


:white_check_mark: Enabled (error)

```javascript

// Bad
/* 
(() => {
	type Foo2 = object;
	const foo = <Foo2>{};
	const x = { text: true } as Foo2;
})();
*/

// Good
(() => {
	type T = object;
	type Foo = object;
	const data = { test: true };
	const x: T = { ...data };
	const y = { ...data } as any;
	const z = { ...data } as unknown;
	function foo(some: T) { throw { bar: 5 } as Foo; }
	foo({ ...data } as T);
})();

```
<br />



### [Explicit function return type](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)

> Require explicit return types on functions and class methods (explicit-function-return-type)


:x: Disabled

```javascript

// Good
// Should indicate that no value is returned (void)
function test() {
	return;
}

// Should indicate that a number is returned
const fn = function () {
	return 1;
};

// Should indicate that a string is returned
const arrowFn = () => 'test';

class Test {
	// Should indicate that no value is returned (void)
	public method() {
		return;
	}
}

```
<br />



### [Explicit member accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)

> Require explicit return types on functions and class methods (explicit-function-return-type)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
class Animal {
	constructor(name) {
		this.animalName = name;
	}
	animalName: string;
	get name(): string {
		return this.animalName;
	}
	set name(value: string) {
		this.animalName = value;
	}
	walk() {
		// method
	}
}
*/
// Good
class Animal {
	private _animalName: string;
	public constructor(name: string) {
		this._animalName = name;
	}
	public get name(): string {
		return this._animalName;
	}
	public set name(value: string) {
		this._animalName = value;
	}
	public walk() {
		// method
	}
}

```
<br />



### [Generic type naming](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/generic-type-naming.md)

> Enforces naming of generic type variables (generic-type-naming)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	type ReadOnly<SomeType extends object> = {
		readonly [TKey in keyof SomeType]: SomeType[TKey]
	};
})();
*/
// Good
(() => {
	type IReadOnly<TSomeType extends object> = {
		readonly [TKey in keyof TSomeType]: TSomeType[TKey]
	};
})();

```
<br />



### [Indent](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/indent.md)

> Enforce consistent indentation (indent)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
type ReadOnly<SomeType extends object> = {
	readonly [TKey in keyof SomeType]: SomeType[TKey]
};
*/
// Good
type ReadOnly<TSomeType extends object> = {
	readonly [TKey in keyof TSomeType]: TSomeType[TKey]
};

```
<br />



### [Interface name prefix](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/interface-name-prefix.md)

> Require that interface names be prefixed with I (interface-name-prefix)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
interface Animal {
	name: string;
}
*/
// Good
interface IAnimal {
	name: string;
}

```
<br />



### [Member delimiter style](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md)

> Require a specific member delimiter style for interfaces and type literals (member-delimiter-style)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
interface IFoo {
	name: string,
	greet(): void,
}
*/
// Good
interface IFoo {
	name: string;
	greet(): void;
}

```
<br />



### [Member ordering](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md)

> Require a consistent member declaration order (member-ordering)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
class Foo {
	private _c: string; // -> field
	protected static e: string; // -> field
	public d: string; // -> field

	public static a(): void {} // -> method
	public b(): void {} // -> method

	public constructor() {
		console.log('constructor');
	} // -> constructor
}
*/
// Good
class Foo {
	protected static e: string; // -> field
	public d: string; // -> field
	private _c: string; // -> field

	public constructor() {
		console.log('constructor');
	} // -> constructor

	public static a(): void {} // -> method
	public b(): void {} // -> method
}

```
<br />



### [Naming convention](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md)

> Enforces naming conventions for everything across a codebase (naming-convention)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
import { no_camelcased } from 'eslint';

(() => {
	no_camelcased();
	// default
	const my_favorite_color = '#112C85';

	// variable
	const my_var = '';
	const MyVar = '';

	// class
	class invalidClassName {}
	class Another_Invalid_Class_Name {}
	const bar = class invalidName {};

	// interface
	interface someInterface {}

	// typeAlias
	type MyType = string;

	// member naming
	class HappyClass {
		private foo: string;
		private bar = 123;
		public _fizz() {}
	}

	// method
	class A {
		public constructor() {
			this.doSomething();
		}
		public _s() {
			document.write('something');
		}
		private doSomething() {
			document.write('something');
		}
	}

	// enum
	enum myEnum {
		a = 'a',
		b = 'b',
	}
})();
*/

// Good
import { no_camelcased as noCamelcased } from 'eslint';

(() => {
	noCamelcased();
	// default
	const myFavoriteColor = '#112C85';

	// variable
	const myVar = '';
	const MY_VAR = '';
	const _this = this;

	// class
	class ValidClassName {}
	class AnotherValidClassName {}
	const bar = class ValidName {};

	// interface
	interface ISomeInterface {}

	// typeAlias
	type TMyType = string;
	type IMyType = string;

	// member naming
	class HappyClass {
		private _foo: string;
		private _bar = 123;
		public fizz() {}
	}

	// method
	class A {
		public constructor() {
			this._doSomething();
		}
		public s() {
			document.write('something');
		}
		private _doSomething() {
			document.write('something');
		}
	}

	// enum
	enum MY_ENUM {
		a = 'a',
		b = 'b',
	}
	enum MyEnum {
		a = 'a',
		b = 'b',
	}

	type TReadOnly<TSomeType extends string> = { readonly [TKey in keyof TSomeType]: TSomeType[TKey] };

	// they should be okay
	const ERROR_CODES = {
		INVALID_USER_INPUT: 'INVALID_USER_INPUT',
		INVALID_SESSION_ID: 'INVALID_SESSION_ID',
		INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
	};

	function mockWriteFile() {
		return (_filePath: string, _data: unknown, onWrote: () => void) => {
			onWrote();
		};
	}

	const mockAuth = {
		access_token: 'authToken',
		signature: 'signature',
		Authorization: ({ accessToken }) => `Bearer ${accessToken}`,
	};

	const Component = () => {};
})();

```
<br />



### [No array constructor](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-array-constructor.md)

> Disallow generic Array constructors (no-array-constructor)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(async () => {
	const arr1 = Array<number>(0, 1, 2);
	const arr2 = new Array<number>(0, 1, 2);

	const arr1 = Array(0, 1, 2);
	const arr2 = new Array(0, 1, 2);
})();
*/

// Good
(async () => {
	const arr3 = Array(500);
	const arr4 = new Array(3);
})();

```
<br />



### [No empty interface](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md)

> Disallow the declaration of empty interfaces (no-empty-interface)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(async () => {
	// an empty interface
	interface IFoo {}

	// an interface with only one supertype (Bar === Foo)
	interface IBar extends IFoo {}

	// an interface with an empty list of supertypes
	interface IBaz {}
})();
*/
// Good
(async () => {
	interface IFoo {
		name: string;
	}
	interface IBar extends IFoo {
		email: string;
	}
	interface IBaz {
		name: string;
	}
})();

```
<br />



### [No explicit any](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md)

> Disallow usage of the any type (no-explicit-any)


:x: Disabled

```javascript

// Bad

/*
const age: any = 'seventeen';
*/
// Good
// not that good but okay in this configuration
const age: any = 'seventeen';

```
<br />



### [No extraneous class](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md)

> Forbids the use of classes as namespaces (no-extraneous-class)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
class ConstructorOnly {
	public constructor() {
		console.log('constructor');
	}
}
*/
// Good
class ConstructorOnly {
	private _version: string = '1.1.0';
	public constructor() {
		console.log(`constructor ${this._version}`);
	}
}

```
<br />



### [No for in array](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md)

> Disallow iterating over an array with a for-in loop (no-for-in-array)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
for (const x in [3, 4, 5]) {
	console.log(x);
}
*/
// Good
// still not okay because not allowed by this rules: no-restricted-syntax, guard-for-in
for (const x in { a: 3, b: 4, c: 5 }) {
	console.log(x);
}

```
<br />



### [No inferrable types](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md)

> Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(async () => {
	const foo: number = 5;
	const bar: boolean = true;
	const baz: string = 'str';
})();
*/
// Good
(async () => {
	const foo = 5;
	const bar = true;
	const baz = 'str';
})();

```
<br />



### [No misused new](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md)

> Enforce valid definition of new and constructor. (no-misused-new)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(async () => {
	class C {
		new(): C;
	}

	interface IFoo {
		new (): IFoo;
		constructor(): void;
	}
})();
*/
// Good
(async () => {
	class C {
		public constructor() {}
	}
	interface IFoo {
		new (): C;
	}
})();

```
<br />



### [No namespace](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md)

> Disallow the use of custom TypeScript modules and namespaces (no-namespace)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}
*/
// Good
declare module 'foo' {}

```
<br />



### [No non null assertion](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)

> Disallows non-null assertions using the ! postfix operator (no-non-null-assertion)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	interface IFoo {
		bar?: string;
	}

	const foo: IFoo = { bar: 'bar' };
	const includesBaz: boolean = foo.bar!.includes('baz');
})();
*/
// Good
(() => {
	interface IFoo {
		bar?: string;
	}

	const foo: IFoo = { bar: 'baz' };
	const includesBaz: boolean = (foo.bar || '').includes('baz');
})();

```
<br />



### [No require imports](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-impo.md)

> Disallows invocation of require() (no-require-imports)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const eslint = require('eslint');
*/
// Good
import eslint from 'eslint';

```
<br />



### [No this alias](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md)

> Disallow aliasing this (no-this-alias)


:x: Disabled

```javascript

// Bad
/*
(() => {
	const self = this;

	setTimeout(() => {
		self.doWork();
	});
})();
*/
// Good
(() => {
	// already covered by consistent-this
	const _this = this;

	setTimeout(() => {
		_this.doWork();
	});
})();

```
<br />



### [No type alias](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-type-alias.md)

> Disallow the use of type aliases (no-type-alias)


:x: Disabled

```javascript

// Good
(() => {
	// primitives
	type Foo = 'a' | 'b';

	type Foo2 = string;

	type Foo3 = string[];

	// reference types
	interface IBar {}
	class Baz implements IBar {}

	type Foo5 = IBar & Baz;
})();

```
<br />



### [No unnecessary qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)

> Warns when a namespace qualifier is unnecessary. (no-unnecessary-qualifier)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
namespace A {
	export type B = number;
	const x: A.B = 3;
}
*/
// Good
namespace X {
	export type B = number;
}
namespace Y {
	export const x: X.B = 3;
}

```
<br />



### [No unnecessary type assertion](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)

> Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	function foo(x: number): number {
		return x!; // unnecessary non-null
	}
})();
*/
// Good
(() => {
	function foo(x: number | undefined): number {
		return x!;
	}
})();

```
<br />



### [No unused vars](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md)

> Disallow unused variables (no-unused-vars)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;
*/
// Good
// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + y;

console.log(z);

```
<br />



### [No use before define](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md)

> Disallow the use of variables before they are defined (no-use-before-define)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	alert(a);
	const a = 10;
})();
*/
// Good
(() => {
	const a = 10;
	alert(a);
})();

```
<br />



### [No useless constructor](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-constructor.md)

> Disallow the use of variables before they are defined (no-use-before-define)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	class A {
		constructor() {}
	}
})();
*/
// Good
(() => {
	class A {
		public constructor() {
			this._doSomething();
		}
		private _doSomething() {
			document.write('something');
		}
	}
})();

```
<br />



### [No var requires](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md)

> Disallows the use of require statements except in import statements (no-var-requires)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	var foo1 = require('foo');
	const foo2 = require('foo');
	let foo3 = require('foo');
})();
*/
// Good
import eslint from 'eslint';

```
<br />



### [Prefer function type](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md)

> Use function types instead of interfaces with call signatures (prefer-function-type)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	interface IFoo {
		(): string;
	}

	function foo(bar: { (): number }): number {
		return bar();
	}

	interface IFoo2 extends Function {
		(): void;
	}
})();
*/
// Good
(() => {
	interface IFoo {
		(): void;
		bar: number;
	}

	function foo(bar: { (): string; baz: number }): string {
		return bar();
	}

	interface IFoo2 {
		bar: string;
	}
	interface IBar extends IFoo2 {
		(): void;
	}
})();

```
<br />



### [Prefer interface](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-interface.md)

> Prefer an interface declaration over a type literal (type T = { ... }) (prefer-interface)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	type Test = { x: number };
})();
*/
// Good
(() => {
	interface ITest {
		x: number;
	}
})();

```
<br />



### [Promise function async](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md)

> Functions that return promises must be async (promise-function-async)


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const arrowFunctionReturnsPromise = () => Promise.resolve('value');

	function functionReturnsPromise() {
		return Math.random() > 0.5 ? Promise.resolve('value') : false;
	}
})();
*/
// Good
(() => {
	const arrowFunctionReturnsPromise = async () => 'value';

	async function functionReturnsPromise() {
		return Math.random() > 0.5 ? 'value' : false;
	}
})();

```
<br />



### [Restrict plus operands](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)

> When adding two variables, operands must both be of type number or of type string.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const foo = '5.5' + 5;
})();
*/
// Good
(() => {
	const foo = parseInt('5.5', 10) + 10;
})();

```
<br />



### [Triple slash reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md)

> Disallow /// <reference path="" /> comments (triple-slash-reference)


:white_check_mark: Enabled (error)

```javascript

// Good
(() => {
	/// <reference path="../../../../node_modules/@types/react/index.d.ts" />
})();

```
<br />



### [Type annotation spacing](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)

> Require consistent spacing around type annotations


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const foo:string = 'bar';
})();
*/
// Good
(() => {
	const foo: string = 'bar';
})();

```
<br />



### [Unified signatures](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md)

> Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	interface IFoo {
		foo(sn: string | number): void;
		foo(s: string): void;
		foo(n: number): void;
		bar(): void;
	}
})();
*/
// Good
(() => {
	interface IFoo {
		foo(sn: string | number): void;
		bar(): void;
	}
})();

```
<br />


