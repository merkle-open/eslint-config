
var utils = require('./utils'),
	argv = process.argv,
	filePath,
	destPath,
	data;

if (argv.length < 4) {
	return;
}

filePath = argv[2];
destPath = argv[3];
data = utils.readFile(filePath);

data.split('\n\n').map(function (rule) {

	var ruleSpl = rule.split('\n'),
		desc,
		destFileName,
		nameStatus,
		nameStatusSpl,
		data = [''];

	if (ruleSpl.length < 1) {
		return;
	}

	desc = ruleSpl[0].replace('//', '').trim();
	nameStatus = ruleSpl[1]
		.replace('//', '')
		.trim()
		.replace(/\[([^, {]*).*/g, '$1')
		.replace(/'/g, '');

	nameStatusSpl = nameStatus.split(':');

	destFileName = destPath + nameStatusSpl[0].replace(/^.*\//, '') + '.js';

	if (utils.existFile(destFileName)) {
		return;
	}

	data.push('// DESCRIPTION = ' + desc);
	data.push('// STATUS = ' + parseInt((nameStatusSpl[1] || 0), 10));
	data.push('');
	data.push('// <!START');
	data.push('');
	data.push('// END!>');
	data.push('document.window.append(\'\', null);');
	data.push('');

	utils.writeFile(destFileName, data.join('\n'));
	console.info('File written: ' + destFileName);

});