
// DESCRIPTION = enforces getter/setter pairs in objects
// STATUS = 0

// <!START
var example;

// Bad
example = {
	set a(value) {
		this.val = value;
	}
};


// Good
example = {
	set a(value) {
		this.val = value;
	},
	get a() {
		return this.val;
	}
};
// END!>

document.window.append(example.toString(), null);
document.window.append(example.toString(), null);
