// Enforce camelCase naming convention (camelcase)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
import { no_camelcased } from 'eslint';

(() => {
	no_camelcased();
	const my_favorite_color = '#112C85';
	console.log(my_favorite_color);
})();
*/
// Good
import { no_camelcased as noCamelcased } from 'eslint';

(() => {
	noCamelcased();
	const myFavoriteColor = '#112C85';
	console.log(myFavoriteColor);
})();
// END!>
