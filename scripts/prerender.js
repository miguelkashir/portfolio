import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function prerender() {
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { generateJsonLd } = await vite.ssrLoadModule('/src/jsonld.ts');
    const appHtml = render();
    const jsonLd = generateJsonLd();

    const template = fs.readFileSync(path.resolve(rootDir, 'dist/index.html'), 'utf-8');
    const html = template
      .replace('<!--app-html-->', appHtml)
      .replace('<!--jsonld-->', jsonLd);

    fs.writeFileSync(path.resolve(rootDir, 'dist/index.html'), html);
    console.log('Pre-rendered dist/index.html');
  } finally {
    await vite.close();
  }
}

prerender().catch(err => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
