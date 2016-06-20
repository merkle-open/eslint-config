
var utils = require('./utils'),
	ig = ['.DS_Store', '.eslintrc'],
	fileName,
	data;

/**
 * @method getESLintUrl
 * @param {String} name fileName
 * @returns {String} eslint documentation url
 */
function getESLintUrl(name) {
	return 'http://eslint.org/docs/rules/' + name;
}

/**
 * @method getStatusIcon
 * @param {String} fileData string read from file
 * @returns {String} statusIcon (unicode character)
 */
function getStatusIcon(fileData) {
	var exp = /STATUS = (.*)/.exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	switch (parseInt(exp[1].trim(), 10)) {
		case 0: return '&#10006;';
		case 1:
		case 2: return '&#10003;';
		default: return '';
	}
}

/**
 * @method getStatus
 * @param {String} fileData string read from file
 * @returns {String} status
 */
function getStatus(fileData) {
	var exp = /STATUS = (.*)/.exec(fileData);

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
 * @param {String} fileData string read from file
 * @returns {String} description
 */
function getDescription(fileData) {
	var exp = /DESCRIPTION = (.*)/.exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	return exp[1].trim();
}

/**
 * @method getTitle
 * @param {String} name fileName
 * @returns {String} title from fileName
 */
function getTitle(name) {
	return utils.capitalize(name.replace('-', ' '));
}

/**
 * @method addSnippet
 * @param {Array} arr output readme lines array
 * @param {String} fileData string read from file
 * @returns {void}
 */
function addSnippet(arr, fileData) {
	var exp = /<!START([^END!>]*)/.exec(fileData);

	if (exp === null || exp.length < 1) {
		return;
	}

	arr.push('```javascript');
	arr.push(exp[1].replace(/\/\/ $/, ''));
	arr.push('```');
}

/**
 * @method getESLintUrl
 * @param {Array} arr output readme lines array
 * @param {String} name fileName
 * @param {String} path filepath
 * @returns {void}
 */
function addRule(arr, name, path) {

	var fileData = utils.readFile(path),
		nameCleaned = name.replace(/\.js$/, ''),
		title = utils.capitalize(nameCleaned.replace(/-/g, ' '));

	arr.push('### [' + title + '](' + getESLintUrl(nameCleaned) + ')');
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
 * @param {String} name fileName
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
				addRule(data, fileObj4.file, fileObj4.path);
				return true;
			});

			writeDocumentationFile(fileName, data);
			return true;
		});
		return true;
	});
	return true;
});
