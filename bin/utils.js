import fs from 'fs';

export default {
	/**
	 * Return fs.Stats for a path
	 * @param {string} dirFileName
	 * @returns {Object}
	 */
	getStats(dirFileName) {
		return fs.statSync(dirFileName);
	},

	/**
	 * Check whether a path is an existing directory
	 * @param {string} dirName
	 * @returns {boolean}
	 */
	existDir(dirName) {
		try {
			return this.getStats(dirName).isDirectory();
		} catch {
			return false;
		}
	},

	/**
	 * Check whether a path is an existing file
	 * @param {string} path
	 * @returns {boolean}
	 */
	existFile(path) {
		try {
			return this.getStats(path).isFile();
		} catch {
			return false;
		}
	},

	/**
	 * Write data to a file, replacing existing content
	 * @param {string} path
	 * @param {Object} data
	 */
	writeFile(path, data) {
		fs.writeFileSync(path, data);
	},

	/**
	 * Read a file as UTF-8 text
	 * @param {string} path
	 * @returns {string}
	 */
	readFile(path) {
		return fs.readFileSync(path, 'utf8');
	},

	/**
	 * Read a directory, skipping ignored files
	 * @param {string} dir
	 * @param {Array<string>} [ignoreFiles]
	 * @returns {Array<{path: string, file: string}>}
	 */
	readDir(dir, ignoreFiles = []) {
		let list = [];

		try {
			list = fs.readdirSync(dir);
		} catch (err) {
			process.stderr.write(`Folder "${err.path}" not found!\n`);
		}

		return list
			.filter((file) => ignoreFiles.indexOf(file) < 0)
			.map((file) => ({
				path: `${dir}/${file}`,
				file,
			}));
	},

	/**
	 * Create a directory, including missing parents
	 * @param {string} dir
	 */
	makeDir(dir) {
		fs.mkdirSync(dir, { recursive: true });
	},

	/**
	 * Capitalize the first letter of a string
	 * @param {string} str
	 * @returns {string}
	 */
	capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
};
