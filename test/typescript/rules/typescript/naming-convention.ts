// DESCRIPTION = Enforces naming conventions for everything across a codebase (naming-convention)
// STATUS = 2

/* eslint-disable no-shadow */
/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/imports-first */
/* eslint-disable no-duplicate-imports */

// <!START
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
// END!>
