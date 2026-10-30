import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import {parsePageHtml} from './algolia/parse-page.mjs';
import {SKIP_PATH_RE} from './algolia/config.mjs';

async function readRouteHtml(outDir, relativePath) {
  const stem = path.join(outDir, decodeURIComponent(relativePath));
  const candidates = relativePath.endsWith('/')
    ? [path.join(stem, 'index.html')]
    : [`${stem}.html`, path.join(stem, 'index.html')];
  for (const file of candidates) {
    try { return await fs.readFile(file, 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  throw new Error(`Missing built HTML for documentation route: ${relativePath}`);
}

/** Emit the existing RDK Docs MCP format from this locale's built HTML, never the live site. */
export async function generateMcpSearchIndex({outDir, siteConfig, baseUrl = siteConfig.baseUrl, routesPaths}) {
  const pages = [];
  const sections = [];
  let id = 0;
  for (const route of [...new Set(routesPaths)].sort()) {
    if (route.includes('*') || /\/404(?:\.html)?\/?$/.test(route) || SKIP_PATH_RE.test(route)) continue;
    const url = new URL(route, siteConfig.url);
    if (!url.pathname.startsWith(baseUrl)) continue;
    const relativePath = url.pathname.slice(baseUrl.length);
    const html = await readRouteHtml(outDir, relativePath);
    const $ = cheerio.load(html);
    const article = $('.theme-doc-markdown');
    if (!article.length) {
      if ($('html').hasClass('plugin-docs')) {
        throw new Error(`Invalid documentation HTML: ${url.pathname}`);
      }
      continue;
    }
    const records = parsePageHtml(html, url.href);
    const title = records.find(r => r.type === 'lvl0');
    if (!title?.content.trim() || !records.some(r => r.type === 'content' && r.content.trim())) {
      throw new Error(`Empty or invalid documentation content: ${url.pathname}`);
    }
    pages.push({i: ++id, t: title.content, u: url.pathname, b: [title.content]});
    for (const record of records.filter(r => r.type !== 'lvl0')) {
      const breadcrumbs = Object.values(record.hierarchy).filter(Boolean);
      sections.push({
        i: ++id,
        t: record.content,
        u: url.pathname,
        b: breadcrumbs,
        s: breadcrumbs.at(-1) || title.content,
        ...(record.anchor ? {h: record.anchor} : {}),
      });
    }
  }
  if (!pages.length || !sections.length) throw new Error('Empty documentation search index');
  await fs.writeFile(path.join(outDir, 'search-index.json'),
    `${JSON.stringify([{documents: pages}, {documents: sections}])}\n`, 'utf8');
  return {pages: pages.length, sections: sections.length};
}
