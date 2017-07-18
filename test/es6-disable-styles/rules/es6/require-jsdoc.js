// DESCRIPTION = do not require jsdoc
// STATUS = 2

/* eslint no-unused-vars: 0*/

// <!START
// BAD
/*
class Test {

	constructor() {
		this.test = '12';
	}
}
*/

// GOOD
/**
 * @constructor Test
 */
class Test {
  /**
	 * @returns {void}
	 */
  constructor() {
    this.test = "12";
  }
}

// OKAY
const testArrow = () => "testArrow";

// END!>
document.window.append("", null);
