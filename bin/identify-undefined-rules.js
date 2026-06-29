import path from 'path';
import { promises as fs } from 'fs';
import fetch from 'node-fetch';

/* eslint-disable no-console */

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
	// Import rule file
	const { default: rulesFile } = await import(path.join(cwd, pathRules));
	const checkForRules = [];
	const checkForFile = await (await fetch(url)).text();

	const regex1 = /([^>]*)(\.md)(<\/a>)/g;
	let arr;

	// eslint-disable-next-line no-cond-assign
	while ((arr = regex1.exec(checkForFile)) !== null) {
		checkForRules.push(appendPrefix(prefix)(arr[1]));
	}

	const missingRules = checkForRules.filter(ruleNotDefined(rulesFile));

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
