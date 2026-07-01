import { ESLint } from 'eslint';
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MAIN_PRESETS = [
	'typescript-browser',
	'typescript-node',
	'typescript-react',
	'es2025-browser',
	'es2025-node',
	'es2025-react',
];

const DISABLE_STYLES_PRESETS = [
	'typescript-browser-disable-styles',
	'typescript-node-disable-styles',
	'typescript-react-disable-styles',
	'es2025-browser-disable-styles',
	'es2025-node-disable-styles',
	'es2025-react-disable-styles',
];

const RULE_MODULES = [
	'best-practices',
	'errors',
	'style',
	'es2025',
	'imports',
	'variables',
	'typescript',
	'node',
	'react',
	'react-a11y',
	'react-hooks',
];

/**
 * Check if directory exists
 */
async function dirExists(path) {
	try {
		const stats = await stat(path);
		return stats.isDirectory();
	} catch {
		return false;
	}
}

/**
 * Get all test files in a directory recursively
 */
async function getTestFiles(dir, extensions = ['.js', '.ts', '.jsx', '.tsx']) {
	const files = [];

	async function walk(currentDir) {
		const entries = await readdir(currentDir, { withFileTypes: true });
		for (const entry of entries) {
			const fullPath = join(currentDir, entry.name);
			if (entry.isDirectory()) {
				await walk(fullPath);
			} else if (extensions.some((ext) => entry.name.endsWith(ext))) {
				files.push(fullPath);
			}
		}
	}

	if (await dirExists(dir)) {
		await walk(dir);
	}
	return files;
}

// Test rule module exports
describe('Rule Modules', () => {
	for (const mod of RULE_MODULES) {
		test(`rules/${mod}.js exports non-empty object`, async () => {
			const module = await import(`../rules/${mod}.js`);
			assert(typeof module.default === 'object', `${mod} should export an object`);
			assert(Object.keys(module.default).length > 0, `${mod} should have rules`);
		});
	}
});

// Test main presets load correctly
describe('Main Presets', () => {
	for (const preset of MAIN_PRESETS) {
		test(`${preset} configuration loads without errors`, async () => {
			const config = await import(`../configurations/${preset}.js`);
			assert(Array.isArray(config.default), `${preset} should export an array`);
			assert(config.default.length > 0, `${preset} should have config objects`);
		});
	}
});

// Test disable-styles presets load correctly
describe('Disable-Styles Presets', () => {
	for (const preset of DISABLE_STYLES_PRESETS) {
		test(`${preset} configuration loads without errors`, async () => {
			const config = await import(`../configurations/${preset}.js`);
			assert(Array.isArray(config.default), `${preset} should export an array`);
			assert(config.default.length > 0, `${preset} should have config objects`);
		});
	}
});

// Test that ESLint can lint files in each preset directory
describe('ESLint Integration', () => {
	for (const preset of MAIN_PRESETS) {
		test(`${preset}: ESLint initializes correctly`, async () => {
			const cwd = join(__dirname, preset);
			if (!(await dirExists(cwd))) {
				return; // Skip if directory doesn't exist
			}

			const eslint = new ESLint({ cwd });
			const config = await eslint.calculateConfigForFile('test.ts');
			assert(config !== null, `${preset} should return a config`);
		});
	}
});

// Test disable-styles presets don't error on style "violations"
describe('Disable-Styles Verification', () => {
	for (const preset of DISABLE_STYLES_PRESETS) {
		test(`${preset}: style rules are disabled`, async () => {
			const cwd = join(__dirname, preset);
			const rulesDir = join(cwd, 'rules');

			if (!(await dirExists(rulesDir))) {
				return; // Skip if rules directory doesn't exist
			}

			const testFiles = await getTestFiles(rulesDir);
			if (testFiles.length === 0) {
				return; // Skip if no test files
			}

			const eslint = new ESLint({ cwd });
			const results = await eslint.lintFiles(testFiles);

			// Filter for style-related errors only
			const styleErrors = results.flatMap((r) =>
				r.messages.filter(
					(m) =>
						m.severity === 2 &&
						(m.ruleId?.startsWith('@stylistic/') ||
							['indent', 'semi', 'quotes', 'comma-dangle', 'no-trailing-spaces'].includes(m.ruleId))
				)
			);

			assert.strictEqual(
				styleErrors.length,
				0,
				`${preset}: style rules should be disabled, but found: ${styleErrors.map((e) => e.ruleId).join(', ')}`
			);
		});
	}
});

// Count test files (informational)
describe('Test File Summary', () => {
	test('count all test files', async () => {
		let total = 0;
		const counts = {};

		for (const preset of [...MAIN_PRESETS, ...DISABLE_STYLES_PRESETS]) {
			const dir = join(__dirname, preset);
			const files = await getTestFiles(dir);
			counts[preset] = files.length;
			total += files.length;
		}

		console.log('\nTest file counts by preset:');
		for (const [preset, count] of Object.entries(counts)) {
			if (count > 0) {
				console.log(`  ${preset}: ${count}`);
			}
		}
		console.log(`  Total: ${total}\n`);

		assert(total > 0, 'Should have test files');
	});
});
