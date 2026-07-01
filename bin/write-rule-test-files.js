import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* eslint "no-console": 0 */

/*
	USAGE:
	node bin/write-rule-test-files.js rules/errors.js test/typescript-browser/rules/errors/ [--ext ts]

	Options:
	  --ext ts|tsx|jsx|js  File extension for generated test files (default: js)
*/

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv;

/**
 * Parse command line arguments
 * @returns {{filePath: string, destPath: string, ext: string}}
 */
function parseArgs() {
	let ext = 'js';
	let filePath = '';
	let destPath = '';

	for (let i = 2; i < argv.length; i++) {
		if (argv[i] === '--ext' && argv[i + 1]) {
			ext = argv[i + 1];
			i++;
		} else if (!filePath) {
			filePath = argv[i];
		} else if (!destPath) {
			destPath = argv[i];
		}
	}

	return { filePath, destPath, ext };
}

/**
 * Parse a rule file and extract rules with descriptions
 * @param {string} content - File content
 * @returns {Array<{name: string, description: string, status: number}>}
 */
function parseRules(content) {
	const rules = [];
	const lines = content.split('\n');
	let currentDescription = '';

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		// Capture description comments (single line starting with //)
		if (line.startsWith('//') && !line.startsWith('// http') && !line.startsWith('// [')) {
			currentDescription = line.replace(/^\/\/\s*/, '').trim();
			continue;
		}

		// Match rule definitions like: 'rule-name': 0, or 'rule-name': [2, ...],
		const ruleMatch = line.match(/^['"]([^'"]+)['"]\s*:\s*(\[?\d)/);
		if (ruleMatch) {
			const ruleName = ruleMatch[1];
			const statusChar = ruleMatch[2];
			// Extract numeric status (0, 1, or 2)
			const status = parseInt(statusChar.replace('[', ''), 10);

			rules.push({
				name: ruleName,
				description: currentDescription || ruleName,
				status: status,
			});
			currentDescription = '';
		}
	}

	return rules;
}

/**
 * Generate test file content for a rule
 * @param {string} description - Rule description
 * @param {number} status - Rule status (0, 1, or 2)
 * @param {string} ext - File extension
 * @returns {string}
 */
function generateTestContent(description, status, ext) {
	const lines = [
		'// DESCRIPTION = ' + description,
		'// STATUS = ' + status,
		'',
		'/* eslint no-unused-vars: 0 */',
		'/* eslint no-undef: 0 */',
	];

	// Add TypeScript-specific disables
	if (ext === 'ts' || ext === 'tsx') {
		lines.push('/* eslint @typescript-eslint/no-unused-vars: 0 */');
	}

	// Add React-specific disables
	if (ext === 'tsx' || ext === 'jsx') {
		lines.push('/* eslint react/react-in-jsx-scope: 0 */');
	}

	lines.push('');
	lines.push('// <!START');
	lines.push('');
	lines.push('// Good');
	lines.push("const example = 'valid code here';");
	lines.push('');
	lines.push('// END!>');
	lines.push('');

	return lines.join('\n');
}

/**
 * Ensure directory exists
 * @param {string} dirPath - Directory path
 */
function ensureDir(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

/**
 * Main function to generate test files
 */
async function writeTestFiles() {
	const { filePath, destPath, ext } = parseArgs();

	if (!filePath || !destPath) {
		console.error('Usage: node bin/write-rule-test-files.js <rules-file> <dest-dir> [--ext ts|tsx|jsx|js]');
		process.exit(1);
	}

	// Read the rule file
	const fullPath = path.resolve(process.cwd(), filePath);
	if (!fs.existsSync(fullPath)) {
		console.error('Rule file not found: ' + fullPath);
		process.exit(1);
	}

	const content = fs.readFileSync(fullPath, 'utf8');
	const rules = parseRules(content);

	if (rules.length === 0) {
		console.warn('No rules found in: ' + filePath);
		return;
	}

	// Ensure destination directory exists
	const destFullPath = path.resolve(process.cwd(), destPath);
	ensureDir(destFullPath);

	let created = 0;
	let skipped = 0;

	for (const rule of rules) {
		// Convert rule name to filename (e.g., @typescript-eslint/no-unused-vars -> no-unused-vars)
		const fileName = rule.name.replace(/^.*\//, '') + '.' + ext;
		const destFile = path.join(destFullPath, fileName);

		// Skip if file already exists
		if (fs.existsSync(destFile)) {
			skipped++;
			continue;
		}

		const testContent = generateTestContent(rule.description, rule.status, ext);
		fs.writeFileSync(destFile, testContent);
		console.info('Created: ' + destFile);
		created++;
	}

	console.info(`\nSummary: ${created} files created, ${skipped} skipped (already exist)`);
}

writeTestFiles();
