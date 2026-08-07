import utils from './utils.js';

/*

	USAGE
	run `node bin/write-documentation.js`

*/

const ig = ['.DS_Store', '.eslintrc'];

/**
 * Rule group -> docs URL builder
 * @type {Object<string, (name: string) => string>}
 */
const ESLINT_URL_BUILDERS = {
	imports: (name) => `https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/${name}.md`,
	react: (name) => `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/${name}.md`,
	'react-a11y': (name) => `https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/${name}.md`,
	'react-hooks': () => 'https://reactjs.org/docs/hooks-rules.html',
	typescript: (name) =>
		`https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/${name.replace(
			/.ts$/,
			'',
		)}.md`,
};

/**
 * Fallback docs URL for core ESLint rules
 * @param {string} name
 * @returns {string}
 */
const defaultUrlBuilder = (name) => `http://eslint.org/docs/rules/${name}`;

/**
 * Rule status -> icon
 * @type {Object<number, string>}
 */
const STATUS_ICONS = {
	0: ':x:',
	1: ':white_check_mark:',
	2: ':white_check_mark:',
};

/**
 * Rule status -> label
 * @type {Object<number, string>}
 */
const STATUS_LABELS = {
	0: 'Disabled',
	1: 'Enabled (warning)',
	2: 'Enabled (error)',
};

/**
 * Build a rule's docs URL
 * @param {string} name
 * @param {string} groupName
 * @returns {string}
 */
function getESLintUrl(name, groupName) {
	const buildUrl = ESLINT_URL_BUILDERS[groupName] || defaultUrlBuilder;

	return buildUrl(name);
}

/**
 * Parse the STATUS marker
 * @param {string} fileData
 * @returns {number|null}
 */
function parseStatus(fileData) {
	const exp = /STATUS = (.*)/.exec(fileData);

	if (!exp) {
		return null;
	}

	return parseInt(exp[1].trim(), 10);
}

/**
 * Resolve the status icon
 * @param {string} fileData
 * @returns {string}
 */
function getStatusIcon(fileData) {
	return STATUS_ICONS[parseStatus(fileData)] || '';
}

/**
 * Resolve the status label
 * @param {string} fileData
 * @returns {string}
 */
function getStatus(fileData) {
	return STATUS_LABELS[parseStatus(fileData)] || '';
}

/**
 * Parse the DESCRIPTION marker
 * @param {string} fileData
 * @returns {string}
 */
function getDescription(fileData) {
	const exp = /DESCRIPTION = (.*)/.exec(fileData);

	if (!exp) {
		return '';
	}

	return exp[1].trim();
}

/**
 * Build a title from a rule file name
 * @param {string} name
 * @returns {string}
 */
function getTitle(name) {
	return utils.capitalize(name.replace('-', ' '));
}

/**
 * Append a rule's example snippet to the output lines
 * @param {Array} arr
 * @param {string} fileData
 */
function addSnippet(arr, fileData) {
	const exp = /<!START([\s\S]*)(END!>)/.exec(fileData);

	if (!exp) {
		return;
	}

	const snippet = exp[1].replace(/\/\/ $/, '');

	if (snippet.trim() === '') {
		return;
	}

	arr.push('```javascript', snippet, '```');
}

/**
 * Append a full rule section to the output lines
 * @param {Array} arr
 * @param {string} name
 * @param {string} path
 * @param {string} groupName
 */
function addRule(arr, name, path, groupName) {
	const fileData = utils.readFile(path);
	const nameCleaned = name.replace(/\.js$/, '').replace(/\.ts$/, '');
	const title = utils.capitalize(nameCleaned.replace(/-/g, ' '));

	arr.push(`### [${title}](${getESLintUrl(nameCleaned, groupName)})`);
	arr.push('');
	arr.push(`> ${getDescription(fileData)}`);
	arr.push('');
	arr.push('');
	arr.push(`${getStatusIcon(fileData)} ${getStatus(fileData)}`);
	arr.push('');
	addSnippet(arr, fileData);
	arr.push('<br />');
	arr.push('');
	arr.push('');
	arr.push('');
}

/**
 * Write a generated documentation file
 * @param {string} name
 * @param {Array} dataArr
 */
function writeDocumentationFile(name, dataArr) {
	utils.writeFile(`./documentation/${name}.md`, dataArr.join('\n'));
}

/**
 * Emit one documentation file for a rule category directory
 * @param {{path: string, file: string}} category
 */
function processCategory(category) {
	const data = ['', `## ${getTitle(category.file)}`, '', ''];

	utils
		.readDir(category.path, ig)
		.filter((entry) => utils.existFile(entry.path))
		.forEach((entry) => addRule(data, entry.file, entry.path, category.file));

	writeDocumentationFile(category.file, data);
}

/**
 * Process every rule category within a preset subdirectory
 * @param {{path: string}} group
 */
function processGroup(group) {
	// disable-styles presets mirror their base preset
	if (!utils.existDir(group.path) || group.path.includes('-disable-styles')) {
		return;
	}

	utils
		.readDir(group.path, ig)
		.filter((entry) => utils.existDir(entry.path))
		.forEach(processCategory);
}

/**
 * Process every subdirectory within a preset directory
 * @param {{path: string}} preset
 */
function processPreset(preset) {
	if (!utils.existDir(preset.path)) {
		return;
	}

	utils.readDir(preset.path, ig).forEach(processGroup);
}

utils.readDir('./test', ig).forEach(processPreset);
