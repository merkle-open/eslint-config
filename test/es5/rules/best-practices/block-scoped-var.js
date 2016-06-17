
// DESCRIPTION = treat var statements as if they were block scoped
// STATUS = 2

/* eslint vars-on-top: 0*/
/* eslint no-constant-condition: 0*/
var example;
// <!START
// Bad
/*
example = {
	doIf: function () {
		if (1 === 2) {
			var build = true;
		}

		document.window.append(build.toString(), null);
	}
};
*/

// Good
example = {
	doIf: function () {
		var build = true;

		if (1 === 2) {
			build = false;
		}

		document.window.append(build.toString(), null);
	}
};

// END!>
document.window.append(example.doIf, null);
