// Integration test: TypeScript Node.js code
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface Config {
	name: string;
	version: string;
	settings: Record<string, unknown>;
}

async function loadConfig(configPath: string): Promise<Config> {
	const fullPath = join(process.cwd(), configPath);
	const content = await readFile(fullPath, 'utf8');
	return JSON.parse(content);
}

async function saveConfig(configPath: string, config: Config): Promise<void> {
	const fullPath = join(process.cwd(), configPath);
	await writeFile(fullPath, JSON.stringify(config, null, 2));
}

export { loadConfig, saveConfig };
export type { Config };
