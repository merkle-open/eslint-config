import path from 'path';
import { promises as fs } from 'fs';
import fetch from 'node-fetch';

const ruleNotDefined = (ruleSet) => (name) => !ruleSet[name];
const prettyPrint = (name) => `- ${name}`;

/**
 * Report plugin rules from remote docs that are missing in a local rule file
 * @param {string} pathRules
 * @param {string} url
 * @param {string} prefix
 * @returns {Promise<void>}
 */
async function identifyUndefinedRules(pathRules, url, prefix) {
	const cwd = await fs.realpath(process.cwd());
	const { default: rulesFile } = await import(path.join(cwd, pathRules));
	const page = await (await fetch(url)).text();

	const documentedRules = [...page.matchAll(/([^>]*)\.md<\/a>/g)].map((match) => `${prefix}${match[1]}`);
	const missingRules = documentedRules.filter(ruleNotDefined(rulesFile));

	if (missingRules.length <= 0) {
		process.stdout.write('All rules are defined\n');
		return;
	}

	process.stdout.write(`\nThe following ${missingRules.length} rules are not defined:\n\n`);
	process.stdout.write(`${missingRules.map(prettyPrint).join('\n')}\n`);
}

identifyUndefinedRules(
	'./rules/typescript.js',
	'https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules',
	'@typescript-eslint/',
);
