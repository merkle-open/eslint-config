/* eslint-disable no-console */
const path = require('path');
const fs = require('fs').promises;
// eslint-disable-next-line no-redeclare
const fetch = require('node-fetch');

const appendPrefix = (prefix) => (val) => `${prefix}${val}`;
const ruleNotDefined = (ruleSet) => (val) => Boolean(!ruleSet[val]);
const prettyPrint = (val) => `- ${val}`;

/**
 * @param {string} pathRules - path to the rule js file
 * @param {string} url - url: for example https://github.com/eslint/eslint/tree/master/docs/rules
 * @param {string} prefix - rule prefix for example "@typescript-eslint/"
 * @returns {void}
 */
async function identifyUndefinedRules(pathRules, url, prefix) {
	const cwd = await fs.realpath(process.cwd());
	// eslint-disable-next-line global-require
	const rulesFile = await require(path.join(cwd, pathRules));
	const checkForRules = [];
	const checkForFile = await (await fetch(url)).text();

	const regex1 = /([^>]*)(\.md)(<\/a>)/g;
	let arr;

	// eslint-disable-next-line no-cond-assign
	while ((arr = regex1.exec(checkForFile)) !== null) {
		checkForRules.push(appendPrefix(prefix)(arr[1]));
	}

	const missingRules = checkForRules.filter(ruleNotDefined(rulesFile.rules));

	if (missingRules.length <= 0) {
		console.log('All rules are defined');
	}

	console.log(`\nThe following ${missingRules.length} rules are not defined:\n`);
	console.log(missingRules.map(prettyPrint).join('\n'));
}

// eslint: https://github.com/eslint/eslint/tree/master/docs/rules
// typescript: https://github.com/eslint/eslint/tree/master/docs/rules

identifyUndefinedRules(
	'./rules/typescript.js',
	'https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules',
	'@typescript-eslint/'
);
