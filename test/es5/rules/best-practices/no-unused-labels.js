
// DESCRIPTION = disallow unused labels
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-labels: 0*/
/* eslint no-extra-label: 0*/
/* eslint no-restricted-syntax: 0*/
/* eslint indent: 0*/
// <!START
// Bad
/*
OUTER_LOOP:
	for (const student of students) {
		if (checkScores(student.scores)) {
			continue;
		}
		doSomething(student);
	}
*/

// Good
OUTER_LOOP:
	for (const student of students) {
		if (!checkScores(student.scores)) {
			break OUTER_LOOP;
		}
		doSomething(student);
	}
// END!>
