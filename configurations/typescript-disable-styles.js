module.exports = {

	extends: [
		'../rules/best-practices-disable-styles.js',
		'../rules/errors-disable-styles.js',
		'../rules/style-disable-styles.js',
		'../rules/variables-disable-styles.js',
		'../rules/imports-disable-styles.js',
		'../rules/es6-disable-styles.js',
		'../rules/es8-disable-styles.js',
		'../rules/typescript-disable-styles.js',
	].map(require.resolve),

};
