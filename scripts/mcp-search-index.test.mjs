import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {test} from 'node:test';
import {parsePageHtml} from './algolia/parse-page.mjs';

const html = `<!doctype html><html><head><meta name="doc-scope" content="rdk_studio::current"></head><body>
<nav>NAV_SENTINEL</nav><article><div class="theme-doc-markdown">
<h1>Studio guide</h1><p>Fresh page introduction.</p>
<h2 id="real-custom-id">Connect SSH safely?</h2><p>NEW_SECTION_SENTINEL ${'complete-body '.repeat(90)}</p>
<table><tbody><tr><th>Setting</th><td>Table content</td></tr></tbody></table>
<pre><code>rdkstudio --NEW_COMMAND_SENTINEL\nsecond line</code></pre>
</div></article><footer>FOOTER_SENTINEL</footer></body></html>`;

function settings(outDir, locale = 'zh-Hans') {
  const baseUrl = `/rdk_studio_doc/${locale === 'en' ? 'en/' : ''}`;
  return {outDir, siteConfig: {url: 'https://developer.d-robotics.cc', baseUrl}, baseUrl,
    routesPaths: [`${baseUrl}guide/`, `${baseUrl}category/test/`, `${baseUrl}search/`, `${baseUrl}blog/post/`, `${baseUrl}404.html`]};
}

async function fixture(run) {
  const outDir = await fs.mkdtemp(path.join(os.tmpdir(), 'studio-doc-index-'));
  try {
    await fs.mkdir(path.join(outDir, 'guide'), {recursive: true});
    await fs.writeFile(path.join(outDir, 'guide/index.html'), html);
    return await run(outDir);
  } finally { await fs.rm(outDir, {recursive: true, force: true}); }
}

test('shared HTML extraction preserves real section IDs and command examples', () => {
  const records = parsePageHtml(html, 'https://developer.d-robotics.cc/rdk_studio_doc/guide/');
  const section = records.find(r => r.type === 'content' && r.content.includes('NEW_SECTION_SENTINEL'));
  assert.equal(section.anchor, 'real-custom-id');
  assert(records.some(r => r.content.includes('NEW_COMMAND_SENTINEL')));
  assert(records.some(r => r.content === 'Setting'));
  assert(!records.some(r => /NAV_SENTINEL|FOOTER_SENTINEL/.test(r.content)));
});

test('post-build index contains full sections and only the current locale routes', async () => fixture(async outDir => {
  const {generateMcpSearchIndex} = await import('./mcp-search-index.mjs');
  await fs.mkdir(path.join(outDir, 'en/old'), {recursive: true});
  await fs.writeFile(path.join(outDir, 'en/old/index.html'), html.replaceAll('NEW_SECTION_SENTINEL', 'OLD_LOCALE_SENTINEL'));
  const options = settings(outDir);
  await generateMcpSearchIndex(options);
  const first = await fs.readFile(path.join(outDir, 'search-index.json'), 'utf8');
  const shards = JSON.parse(first);
  assert.equal(shards.length, 2);
  assert.equal(shards[0].documents.length, 1);
  const page = shards[0].documents[0];
  assert.equal(page.t, 'Studio guide');
  assert.equal(page.u, '/rdk_studio_doc/guide/');
  const section = shards[1].documents.find(d => d.t.includes('NEW_SECTION_SENTINEL'));
  assert.equal(section.h, 'real-custom-id');
  assert.equal(section.s, 'Connect SSH safely?');
  assert(section.t.length > 1000);
  assert(shards[1].documents.some(d => d.t.includes('NEW_COMMAND_SENTINEL')));
  assert(!/OLD_LOCALE_SENTINEL|NAV_SENTINEL|FOOTER_SENTINEL/.test(first));
  await generateMcpSearchIndex(options);
  assert.equal(await fs.readFile(path.join(outDir, 'search-index.json'), 'utf8'), first);
}));

test('English output uses the English URL prefix and supports .html route output', async () => fixture(async outDir => {
  const {generateMcpSearchIndex} = await import('./mcp-search-index.mjs');
  await fs.writeFile(path.join(outDir, 'second.html'), html);
  const options = settings(outDir, 'en');
  options.routesPaths.push('/rdk_studio_doc/en/second');
  await generateMcpSearchIndex(options);
  const shards = JSON.parse(await fs.readFile(path.join(outDir, 'search-index.json'), 'utf8'));
  assert.equal(shards[0].documents.length, 2);
  assert(shards.flatMap(s => s.documents).every(d => d.u.startsWith('/rdk_studio_doc/en/')));
}));

test('missing, malformed, or empty documentation cannot publish a successful index', async () => fixture(async outDir => {
  const {generateMcpSearchIndex} = await import('./mcp-search-index.mjs');
  const options = settings(outDir);
  await fs.writeFile(path.join(outDir, 'guide/index.html'), '<article class="theme-doc-markdown"></article>');
  await assert.rejects(generateMcpSearchIndex(options), /empty|invalid|title|content/i);
  await fs.writeFile(path.join(outDir, 'guide/index.html'), '<main>Not a documentation page</main>');
  await assert.rejects(generateMcpSearchIndex(options), /empty|documentation/i);
  await fs.writeFile(path.join(outDir, 'guide/index.html'), '<html class="plugin-docs"><main>Broken document shell</main></html>');
  await assert.rejects(generateMcpSearchIndex(options), /invalid documentation/i);
  options.routesPaths = ['/rdk_studio_doc/missing/'];
  await assert.rejects(generateMcpSearchIndex(options), /missing|ENOENT/i);
}));
