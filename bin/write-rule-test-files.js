/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint "no-console": 0 */

/*

	USAGE:
	node bin/write-rule-test-files.js rules/errors.js test/errors/rules/

*/

var utils = require('./utils');
var argv = process.argv;
var filePath;
var destPath;
var data;

/**
 * @method writeTestFiles
 * @returns {void}
 */
function writeTestFiles() {

	if (argv.length < 4) {
		return;
	}

	filePath = argv[2];
	destPath = argv[3];
	data = utils.readFile(filePath);


	data.split('\n\n').map(function (rule) {


		var ruleSpl = rule.split('\n');
		var desc;
		var destFileName;
		var nameStatus;
		var nameStatusSpl;
		var fileData = [''];

		if (ruleSpl.length < 1) {
			return true;
		}

		desc = ruleSpl[0].replace('//', '').trim();
		nameStatus = ruleSpl[1]
			.replace('//', '')
			.trim()
			.replace(/\[([^, {]*).*/g, '$1')
			.replace(/'/g, '');

		if (nameStatus.search(/^http/) >= 0) {
			nameStatus = ruleSpl[2]
				.replace('//', '')
				.trim()
				.replace(/\[([^, {]*).*/g, '$1')
				.replace(/'/g, '');
		}

		nameStatusSpl = nameStatus.split(':');

		destFileName = destPath + nameStatusSpl[0].replace(/^.*\//, '') + '.js';
		if (utils.existFile(destFileName)) {
			return true;
		}

		fileData.push('// DESCRIPTION = ' + desc);
		fileData.push('// STATUS = ' + parseInt((nameStatusSpl[1] || 0), 10));
		fileData.push('');
		fileData.push('// <!START');
		fileData.push('');
		fileData.push('// END!>');
		fileData.push('document.window.append(\'\', null);');
		fileData.push('');

		utils.writeFile(destFileName, fileData.join('\n'));
		console.info('File written: ' + destFileName);

		return true;
	});
}

writeTestFiles();
