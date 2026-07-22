import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname);
const output = resolve(root, 'dist');
const files = [
  'index.html',
  'app.js',
  'style.css',
  'sw.js',
  'manifest.webmanifest',
  'icon.svg',
];

await rm(output, { recursive: true, force: true });
await mkdir(resolve(output, 'vendor'), { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(output, file));
}
await cp(resolve(root, 'vendor/qrcode.js'), resolve(output, 'vendor/qrcode.js'));

const appSource = await readFile(resolve(output, 'app.js'), 'utf8');
const buildId = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
await writeFile(resolve(output, 'app.js'), `/* Math Rush build ${buildId} */\n${appSource}`);

console.log(`Math Rush production build created at ${output}`);
console.log(`Assets: ${files.length + 1}`);
