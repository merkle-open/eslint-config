/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint "complexity": 0 */

/*

	USAGE
	run `node bin/write-documentation.js`

*/

var utils = require('./utils');
var ig = ['.DS_Store', '.eslintrc'];
var fileName;
var data;

/**
 * @method getESLintUrl
 * @param {string} name - fileName
 * @param {string} groupName - name of group
 * @returns {string} eslint documentation url
 */
function getESLintUrl(name, groupName) {

	switch (groupName) {
		case 'imports':
			return 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/' + name + '.md';
		case 'react':
			return 'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/' + name + '.md';
		case 'react-a11y':
			return 'https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/' + name + '.md';
		case 'react-hooks':
			return 'https://reactjs.org/docs/hooks-rules.html';
		case 'typescript':
			return 'https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/' + name.replace(/.ts$/, '') + '.md';
		case 'security':
			return 'https://www.npmjs.com/package/eslint-plugin-security#' + name;
		default:
			return 'http://eslint.org/docs/rules/' + name;
	}

}

/**
 * @method getStatusIcon
 * @param {string} fileData - string read from file
 * @returns {string} statusIcon (unicode character)
 */
function getStatusIcon(fileData) {
	var exp = (/STATUS = (.*)/).exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	switch (parseInt(exp[1].trim(), 10)) {
		case 0: return ':x:';
		case 1:
		case 2: return ':white_check_mark:';
		default: return '';
	}
}

/**
 * @method getStatus
 * @param {string} fileData - string read from file
 * @returns {string} status
 */
function getStatus(fileData) {
	var exp = (/STATUS = (.*)/).exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	switch (parseInt(exp[1].trim(), 10)) {
		case 0: return 'Disabled';
		case 1: return 'Enabled (warning)';
		case 2: return 'Enabled (error)';
		default: return '';
	}
}

/**
 * @method getDescription
 * @param {string} fileData string read from file
 * @returns {string} description
 */
function getDescription(fileData) {
	var exp = (/DESCRIPTION = (.*)/).exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	return exp[1].trim();
}

/**
 * @method getTitle
 * @param {string} name fileName
 * @returns {string} title from fileName
 */
function getTitle(name) {
	return utils.capitalize(name.replace('-', ' '));
}

/**
 * @method addSnippet
 * @param {Array} arr output readme lines array
 * @param {string} fileData string read from file
 * @returns {void}
 */
function addSnippet(arr, fileData) {
	var exp = (/<!START([\s\S]*)(END!>)/).exec(fileData);
	var code;

	if (exp === null || exp.length < 1) {
		return;
	}

	code = exp[1].replace(/\/\/ $/, '').trim();

	if (code === '') {
		return;
	}

	arr.push('```javascript');
	arr.push(exp[1].replace(/\/\/ $/, ''));
	arr.push('```');
}

/**
 * @method getESLintUrl
 * @param {Array} arr output readme lines array
 * @param {string} name fileName
 * @param {string} path filepath
 * @param {string} groupName name of group
 * @returns {void}
 */
function addRule(arr, name, path, groupName) {

	var fileData = utils.readFile(path);
	var nameCleaned = name.replace(/\.js$/, '').replace(/\.ts$/, '');
	var title = utils.capitalize(nameCleaned.replace(/-/g, ' '));

	arr.push('### [' + title + '](' + getESLintUrl(nameCleaned, groupName) + ')');
	arr.push('');
	arr.push('> ' + getDescription(fileData));
	arr.push('');
	arr.push('');
	arr.push(getStatusIcon(fileData) + ' ' + getStatus(fileData));
	arr.push('');
	addSnippet(arr, fileData);
	arr.push('<br />');
	arr.push('');
	arr.push('');
	arr.push('');
}

/**
 * @method writeDocumentationFile
 * @param {string} name fileName
 * @param {Array} dataArr array with lines of readme
 * @returns {void}
 */
function writeDocumentationFile(name, dataArr) {
	utils.writeFile('./documentation/' + name + '.md', dataArr.join('\n'));
}

// get all files from fourth directory level in "./test"
utils.readDir('./test', ig).map(function (fileObj1) {
	if (!utils.existDir(fileObj1.path)) {
		return true;
	}
	utils.readDir(fileObj1.path, ig).map(function (fileObj2) {
		if (!utils.existDir(fileObj2.path)) {
			return true;
		}
		// ignore disable-styles
		if (fileObj2.path.indexOf('-disable-styles') >= 0) {
			return true;
		}
		utils.readDir(fileObj2.path, ig).map(function (fileObj3) {
			if (!utils.existDir(fileObj3.path)) {
				return true;
			}

			fileName = fileObj3.file;
			data = [''];

			data.push('## ' + getTitle(fileName));
			data.push('');
			data.push('');

			utils.readDir(fileObj3.path, ig).map(function (fileObj4) {
				if (!utils.existFile(fileObj4.path)) {
					return true;
				}
				addRule(data, fileObj4.file, fileObj4.path, fileName);
				return true;
			});

			writeDocumentationFile(fileName, data);
			return true;
		});
		return true;
	});
	return true;
});
