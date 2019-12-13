/**
 *
 * 	DASH4 configuration
 *  https://github.com/smollweide/dash4
 *
 */
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-dependencies
const { PluginDependencies } = require('@dash4/plugin-dependencies');
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-readme
const { PluginReadme } = require('@dash4/plugin-readme');
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-npm-scripts
const { PluginNpmScripts } = require('@dash4/plugin-npm-scripts');

/**
 * getConfig
 * @returns {Promise<Object>} dash4 configuration
 */
async function getConfig() {
	return {
		port: 4000,
		tabs: [
			{
				title: 'root',
				rows: [
					[
						new PluginReadme({ file: 'README.md', width: [12, 8, 8] }),
						new PluginNpmScripts({
							scripts: [
								{ title: 'install', cmd: 'npm i' },
								{ title: 'test', cmd: 'npm run test' },
								{ title: 'lint', cmd: 'npm run lint' },
								{ title: 'prettier', cmd: 'npm run prettier' },
								{ title: 'docs', cmd: 'npm run docs' },
							],
							width: [12, 4, 4],
						}),
					],
					[new PluginDependencies()],
				],
			},
		],
	};
}

module.exports = getConfig;
