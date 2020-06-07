'use strict';
/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint "no-console": 0 */

var fs = require('fs');

module.exports = {

	/**
	 *
	 * @method getStats
	 * @param {string} dirFileName - the directory name
	 * @returns {Object} getStats
	 * @public
	 */
	getStats: function (dirFileName) {
		return fs.statSync(dirFileName);
	},

	/**
	 *
	 * @method isDir
	 * @param {string} dirName - the directory name
	 * @returns {boolean} isDir - is directory
	 * @public
	 */
	existDir: function (dirName) {

		var isDir = false;

		try {
			isDir = this.getStats(dirName).isDirectory();
		} catch (err) {
			isDir = false;
		}

		return isDir;
	},

	/**
	 *
	 * @method existFile
	 * @param {string} path - the path
	 * @returns {boolean} isFile - is given path a file or not
	 * @public
	 */
	existFile: function (path) {

		var isFile = false;

		try {
			isFile = this.getStats(path).isFile();
		} catch (err) {
			isFile = false;
		}

		return isFile;
	},

	/**
	 *
	 * @method writeFile
	 * @param {string} path - the path
	 * @param {Object} data - the data object
	 * @returns {void}
	 * @public
	 */
	writeFile: function (path, data) {
		fs.writeFileSync(path, data);
	},

	/**
	 *
	 * @method readFile
	 * @param {string} path - the path
	 * @returns {string} returns the file data
	 * @public
	 */
	readFile: function (path) {
		return fs.readFileSync(path, 'utf8');
	},

	/**
	 *
	 * @method writeFile
	 * @param {string} dir - the directory path
	 * @param {Array|undefined} ignoreFiles - the files which should be ignored
	 * @returns {Array} the result set
	 * @public
	 */
	readDir: function (dir, ignoreFiles) {
		var results = [];
		var list = [];

		ignoreFiles = ignoreFiles || [];

		try {
			list = fs.readdirSync(dir);
		} catch (err) {
			console.error('Folder "' + err.path + '" not found!');
		}

		list.forEach(function (file) {
			if (ignoreFiles.indexOf(file) < 0) {
				results.push({
					path: dir + '/' + file,
					file: file,
				});
			}
		});
		return results;
	},

	/**
	 * Capitalizes the first letter of the given string.
	 *
	 * @method capitalize
	 * @param {string} str - The original string
	 * @returns {string} The capitalized string
	 */
	capitalize: function (str) {
		// Capitalize the first letter
		return str.substr(0, 1).toUpperCase().concat(str.substr(1));
	},

};
