import path from 'path';
import utils from './utils.js';

/*
	USAGE:
	node bin/write-rule-test-files.js rules/errors.js test/typescript-browser/rules/errors/ [--ext ts]

	Options:
	  --ext ts|tsx|jsx|js  File extension for generated test files (default: js)
*/

/**
 * Parse command line arguments
 * @param {Array<string>} args
 * @returns {{filePath: string, destPath: string, ext: string}}
 */
function parseArgs(args) {
	const extIndex = args.indexOf('--ext');
	const ext = extIndex >= 0 ? args[extIndex + 1] || 'js' : 'js';
	const positional = args.filter((arg, index) => arg !== '--ext' && index !== extIndex + 1);
	const [filePath = '', destPath = ''] = positional;

	return { filePath, destPath, ext };
}

/**
 * Check whether a line is a single-line description comment
 * @param {string} line
 * @returns {boolean}
 */
function isDescriptionComment(line) {
	return line.startsWith('//') && !line.startsWith('// http') && !line.startsWith('// [');
}

/**
 * Extract a rule definition from a line, if present
 * @param {string} line
 * @param {string} description
 * @returns {{name: string, description: string, status: number}|null}
 */
function parseRuleLine(line, description) {
	const ruleMatch = line.match(/^['"]([^'"]+)['"]\s*:\s*(\[?\d)/);

	if (!ruleMatch) {
		return null;
	}

	const name = ruleMatch[1];
	const status = parseInt(ruleMatch[2].replace('[', ''), 10);

	return {
		name,
		description: description || name,
		status,
	};
}

/**
 * Parse a rule file and extract rules with descriptions
 * @param {string} content
 * @returns {Array<{name: string, description: string, status: number}>}
 */
function parseRules(content) {
	const rules = [];
	let currentDescription = '';

	for (const rawLine of content.split('\n')) {
		const line = rawLine.trim();

		if (isDescriptionComment(line)) {
			currentDescription = line.replace(/^\/\/\s*/, '').trim();
		} else {
			const rule = parseRuleLine(line, currentDescription);

			if (rule) {
				rules.push(rule);
				currentDescription = '';
			}
		}
	}

	return rules;
}

/**
 * Build the eslint-disable header lines for a test file
 * @param {string} ext
 * @returns {Array<string>}
 */
function buildDisableHeader(ext) {
	const lines = ['/* eslint no-unused-vars: 0 */', '/* eslint no-undef: 0 */'];

	if (ext === 'ts' || ext === 'tsx') {
		lines.push('/* eslint @typescript-eslint/no-unused-vars: 0 */');
	}

	if (ext === 'tsx' || ext === 'jsx') {
		lines.push('/* eslint react/react-in-jsx-scope: 0 */');
	}

	return lines;
}

/**
 * Generate test file content for a rule
 * @param {string} description
 * @param {number} status
 * @param {string} ext
 * @returns {string}
 */
function generateTestContent(description, status, ext) {
	return [
		`// DESCRIPTION = ${description}`,
		`// STATUS = ${status}`,
		'',
		...buildDisableHeader(ext),
		'',
		'// <!START',
		'',
		'// Good',
		"const example = 'valid code here';",
		'',
		'// END!>',
		'',
	].join('\n');
}

/**
 * Write a test file, skipping if it already exists
 * @param {string} destDir
 * @param {{name: string, description: string, status: number}} rule
 * @param {string} ext
 * @returns {boolean}
 */
function writeRuleFile(destDir, rule, ext) {
	const fileName = `${rule.name.replace(/^.*\//, '')}.${ext}`;
	const destFile = path.join(destDir, fileName);

	if (utils.existFile(destFile)) {
		return false;
	}

	utils.writeFile(destFile, generateTestContent(rule.description, rule.status, ext));
	process.stdout.write(`Created: ${destFile}\n`);

	return true;
}

/**
 * Read and parse the source rule file
 * @param {string} filePath
 * @returns {Array<{name: string, description: string, status: number}>}
 */
function readRules(filePath) {
	const fullPath = path.resolve(process.cwd(), filePath);

	if (!utils.existFile(fullPath)) {
		process.stderr.write(`Rule file not found: ${fullPath}\n`);
		process.exit(1);
	}

	return parseRules(utils.readFile(fullPath));
}

/**
 * Generate all test files
 */
function writeTestFiles() {
	const { filePath, destPath, ext } = parseArgs(process.argv.slice(2));

	if (!filePath || !destPath) {
		process.stderr.write(
			'Usage: node bin/write-rule-test-files.js <rules-file> <dest-dir> [--ext ts|tsx|jsx|js]\n',
		);
		process.exit(1);
	}

	const rules = readRules(filePath);

	if (rules.length === 0) {
		process.stderr.write(`No rules found in: ${filePath}\n`);
		return;
	}

	const destDir = path.resolve(process.cwd(), destPath);
	utils.makeDir(destDir);

	const created = rules.filter((rule) => writeRuleFile(destDir, rule, ext)).length;
	const skipped = rules.length - created;

	process.stdout.write(`\nSummary: ${created} files created, ${skipped} skipped (already exist)\n`);
}

writeTestFiles();
