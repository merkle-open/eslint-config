
## Flow


### [Boolean style](http://eslint.org/docs/rules/boolean-style)

> enforces a particular style for boolean type annotations. This rule takes one argument.


:white_check_mark: Enabled (error)

```javascript

// GOOD
type AeType = boolean;

// BAD
/*
type BeType = bool;
type CeType = Boolean;
*/

```
<br />



### [Define flow type](http://eslint.org/docs/rules/define-flow-type)

> marks Flow type identifiers as defined. Used to suppress [`no-undef`](https://github.com/gajus/eslint-plugin-flowtypedocs/rules/no-undef) reporting of type identifiers.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
const a: AeType = '';
*/
// GOOD
type BeType = string;
const b: BeType = '';

```
<br />



### [Delimiter dangle](http://eslint.org/docs/rules/delimiter-dangle)

> enforces consistent use of trailing commas in Object and Tuple annotations.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type AeType = {
	foo: string
};
*/
// GOOD
type BeType = {
	foo: string,
};

```
<br />



### [Generic spacing](http://eslint.org/docs/rules/generic-spacing)

> enforces consistent spacing within generic type annotation parameters.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type AeType = Promise< string>;
*/
// GOOD
type BeType = Promise<string>;

```
<br />



### [No primitive constructor types](http://eslint.org/docs/rules/no-primitive-constructor-types)

> disallows use of primitive constructors as types, such as `Boolean`, `Number` and `String`. [See more](https://flowtype.org/docs/builtins.html).


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type NumberType = Number;
type StringType = String;
type BooleanType = Boolean;
*/

// GOOD
type NumberType = number;
type StringType = string;
type BooleanType = boolean;

```
<br />



### [No weak types](http://eslint.org/docs/rules/no-weak-types)

> Warns against weak type annotations *any*, *Object* and *Function*. These types can cause flow to silently skip over portions of your code, which would have otherwise caused type errors.


:x: Disabled

```javascript

// BAD
function foo(thing: string): any { return true; }

// GOOD
function foo(thing: string): boolean { return true; }

```
<br />



### [Object type delimiter](http://eslint.org/docs/rules/object-type-delimiter)

> enforces consistent separators between properties in Flow object types.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type FooType = { a: string; b: string };
type Foo2Type = {
    a: string,
    b: string
};
*/
// GOOD
type FooType = { a: string, b: string };
type Foo2Type = {
	a: string,
	b: string,
};

```
<br />



### [Require jsdoc](http://eslint.org/docs/rules/require-jsdoc)

> Overwrite require-jsdoc rule


:x: Disabled

```javascript

// jsdoc is not required if you are using flow
function foo(thing: string): any { return true; }

```
<br />



### [Require parameter type](http://eslint.org/docs/rules/require-parameter-type)

> requires that all function parameters have type annotations.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
function x(foo) {}
*/
// GOOD
function x(foo: string) {}

```
<br />



### [Require return type](http://eslint.org/docs/rules/require-return-type)

> requires that functions have return type annotation.


:x: Disabled

```javascript

// BAD
/*
const a = (foo: string) => { return 'foo'; };
*/
// GOOD
const b = (foo: string): string => {
	return 'foo';
};

```
<br />



### [Require valid file annotation](http://eslint.org/docs/rules/require-valid-file-annotation)

> this rule validates Flow file annotations.


:white_check_mark: Enabled (error)

```javascript

// @flow
// or
/* @flow */

```
<br />



### [Semi](http://eslint.org/docs/rules/semi)

> enforces consistent use of semicolons after type aliases.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type FooType = {}
*/
// GOOD
type FooType = {};

```
<br />



### [Space after type colon](http://eslint.org/docs/rules/space-after-type-colon)

> enforces consistent spacing after the type annotation colon.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
const a = (foo:string) => {};
const b = (foo :string) => {};
const c = (foo : string) => {};
*/
// GOOD
const d = (foo: string) => {};

```
<br />



### [Space before generic bracket](http://eslint.org/docs/rules/space-before-generic-bracket)

> Enforces consistent spacing before the opening < of generic type annotation parameters.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type XeType = Promise <string>;
*/
// GOOD
type XeType = Promise<string>;

```
<br />



### [Space before type colon](http://eslint.org/docs/rules/space-before-type-colon)

> Enforces consistent spacing before the type annotation colon.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
const a = (foo : string) => {};
*/
// GOOD
const b = (foo: string) => {};

```
<br />



### [Type id match](http://eslint.org/docs/rules/type-id-match)

> Enforces a consistent naming pattern for type aliases.


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type foo = {};
*/
// GOOD
type FooType = {};

```
<br />



### [Union intersection spacing](http://eslint.org/docs/rules/union-intersection-spacing)

> Enforces consistent spacing around union and intersection type separators (| and &).


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
type XeType = string| number;
*/
// GOOD
type XeType = string | number;

```
<br />



### [Use flow type](http://eslint.org/docs/rules/use-flow-type)

> Marks Flow type alias declarations as used. Used to suppress no-unused-vars errors that are triggered by type aliases.


:white_check_mark: Enabled (error)

```javascript

// GOOD
declare class A {}

```
<br />


