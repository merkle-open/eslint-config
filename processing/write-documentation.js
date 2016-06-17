
var utils = require('./utils'),
	ig = ['.DS_Store', '.eslintrc'],
	fileName,
	data;

// get all files from fourth directory level in "./test"
utils.readDir('./test', ig).map(function (fileObj1) {
	if (!utils.existDir(fileObj1.path)) {
		return;
	}
	utils.readDir(fileObj1.path, ig).map(function (fileObj2) {
		if (!utils.existDir(fileObj2.path)) {
			return;
		}
		utils.readDir(fileObj2.path, ig).map(function (fileObj3) {
			if (!utils.existDir(fileObj3.path)) {
				return;
			}

			fileName = fileObj3.file;
			data = [''];

			data.push('## ' + getTitle(fileName));
			data.push('');
			data.push('');

			utils.readDir(fileObj3.path, ig).map(function (fileObj4) {
				if (!utils.existFile(fileObj4.path)) {
					return;
				}
				addRule(data, fileObj4.file, fileObj4.path);
			});

			writeDocumentationFile(fileName, data);
		});
	});
});

function addRule (arr, name, path) {

	var fileData = utils.readFile(path),
		nameCleaned = name.replace(/\.js$/, ''),
		title = utils.capitalize(nameCleaned.replace('-', ' '));

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

function getESLintUrl (name) {
	return 'http://eslint.org/docs/rules/' + name;
}

function addSnippet (arr, fileData) {
	var exp = /<!START([^END!>]*)/.exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	arr.push('```javascript');
	arr.push(exp[1].replace(/\/\/ $/, ''));
	arr.push('```');
}

function getStatusIcon (fileData) {
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

function getStatus (fileData) {
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

function getDescription (fileData) {
	var exp = /DESCRIPTION = (.*)/.exec(fileData);

	if (exp === null || exp.length < 1) {
		return '';
	}

	return exp[1].trim();
}

function getTitle (name) {
	return utils.capitalize(name.replace('-', ' '));
}

function writeDocumentationFile (name, data) {
	utils.writeFile('./documentation/' + name + '.md', data.join('\n'));
}