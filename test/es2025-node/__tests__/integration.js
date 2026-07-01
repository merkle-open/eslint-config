// Integration test: ES2025 Node.js code
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function loadConfig(configPath) {
	const fullPath = join(process.cwd(), configPath);
	const content = await readFile(fullPath, 'utf8');
	return JSON.parse(content);
}

async function saveConfig(configPath, config) {
	const fullPath = join(process.cwd(), configPath);
	await writeFile(fullPath, JSON.stringify(config, null, 2));
}

export { loadConfig, saveConfig };
