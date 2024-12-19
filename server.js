import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { build as esbuild } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const app = new Hono();

app.get('/', async (c) => {
  const { default: Page } = await import('./build/page.js');
  const html = renderToString(createElement(Page));
  return c.html(html);
});

serve(app, async (info) => {
  await build();
  console.log(`Server is running on http://localhost:${info.port}`);
});

async function build() {
  await esbuild({
    entryPoints: [resolveApp('page.jsx')],
    logLevel: 'error',
    outdir: resolveBuild(),
    bundle: true,
    platform: 'node',
    jsx: 'transform',
    format: 'esm',
    // avoid bundling npm packages
    packages: 'external',
    external: ['react', 'react-dom'],
  });
}

const appDir = new URL('./app/', import.meta.url);
const buildDir = new URL('./build/', import.meta.url);

function resolveApp(path = '') {
  return fileURLToPath(new URL(path, appDir));
}

function resolveBuild(path = '') {
  return fileURLToPath(new URL(path, buildDir));
}
