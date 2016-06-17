'use strict';

var fs = require('fs');

module.exports = {

	/**
	 *
	 * @method getStats
	 * @param {string} dirFileName
	 * @returns {object} getStats
	 * @public
	 */
	getStats: function (dirFileName) {
		return fs.statSync(dirFileName);
	},

	/**
	 *
	 * @method isDir
	 * @param {string} dirName
	 * @returns {boolean} isDir
	 * @public
	 */
	existDir: function (dirName) {

		var isDir = false;

		try {
			isDir = this.getStats(dirName).isDirectory();
		} catch (err) {}

		return isDir;
	},

	/**
	 *
	 * @method existFile
	 * @param {string} path
	 * @returns {boolean} isFile
	 * @public
	 */
	existFile: function (path) {

		var isFile = false;

		try {
			isFile = this.getStats(path).isFile();
		} catch (err) {}

		return isFile;
	},

	/**
	 *
	 * @method writeFile
	 * @param {string} path
	 * @param {object} data
	 * @public
	 */
	writeFile: function (path, data) {
		fs.writeFileSync(path, data);
	},

	/**
	 *
	 * @method readFile
	 * @param {string} path
	 * @returns {string}
	 * @public
	 */
	readFile: function (path) {
		return fs.readFileSync(path, 'utf8');
	},

	/**
	 *
	 * @method writeFile
	 * @param {string} dir
	 * @param {Array|undefined} ignoreFiles
	 * @public
	 */
	readDir: function (dir, ignoreFiles) {
		var results = [],
			list = [];

		ignoreFiles = ignoreFiles || [];

		try {
			list = fs.readdirSync(dir);
		} catch (err) {
			console.error('Folder "' + err.path + '" not found!');
		}

		list.forEach(function(file) {
			if (ignoreFiles.indexOf(file) < 0) {
				results.push({
					path: dir + '/' + file,
					file: file
				});
			}
		});
		return results;
	},

	/**
	 * Capitalizes the first letter of the given string.
	 *
	 * @method capitalize
	 * @param {String} str
	 *      The original string
	 * @return {String}
	 *      The capitalized string
	 */
	capitalize: function(str) {
		// Capitalize the first letter
		return str.substr(0, 1).toUpperCase().concat(str.substr(1));
	}

};