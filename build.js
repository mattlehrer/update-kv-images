import { build } from 'esbuild';
import { replace } from 'esbuild-plugin-replace';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
	await build({
		bundle: true,
		sourcemap: true,
		format: 'esm',
		target: 'esnext',
		entryPoints: [path.join(__dirname, 'src', 'index.ts')],
		outdir: path.join(__dirname, 'dist'),
		outExtension: { '.js': '.mjs' },
		plugins: [
			replace({
				values: {
					[`request.mode`]: '//request.mode',
					'request.cache': '//request.cache',
					'request.credentials': '//request.credentials',
					'request.referrer': '//request.referrer',
				},
			}),
		],
	});
} catch {
	process.exitCode = 1;
}
