const fs = require('fs');
const path = require('path');
const {
  defaultDocScope,
  DOC_SCOPE_DIMENSIONS,
} = require('../search/doc-scope-config.cjs');

/** Inject default doc scope meta and emit build/doc-scope-map.json after build. */
function docScopePlugin() {
  return {
    name: 'doc-scope-plugin',
    injectHtmlTags() {
      const scope = defaultDocScope();
      return {
        headTags: [
          {
            tagName: 'meta',
            attributes: {
              name: 'doc-scope',
              content: scope,
            },
          },
        ],
        htmlAttributes: {
          'data-doc-scopes': scope,
        },
      };
    },
    async postBuild(props) {
      const {outDir, siteConfig} = props;
      const map = {
        default: defaultDocScope(),
        dimensions: DOC_SCOPE_DIMENSIONS,
        baseUrl: siteConfig.baseUrl,
        generatedAt: new Date().toISOString(),
      };
      fs.mkdirSync(outDir, {recursive: true});
      fs.writeFileSync(
        path.join(outDir, 'doc-scope-map.json'),
        JSON.stringify(map, null, 2),
        'utf8',
      );
      const {generateMcpSearchIndex} = await import('../scripts/mcp-search-index.mjs');
      await generateMcpSearchIndex(props);
    },
  };
}

module.exports = docScopePlugin;
