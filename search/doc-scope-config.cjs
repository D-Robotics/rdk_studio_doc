/** CJS mirror of doc-scope-config.mjs for Docusaurus plugins. */
const DOC_SCOPE_DIMENSIONS = {
  product: {queryParam: 'p', default: 'rdk_studio', label: 'RDK Studio'},
  version: {queryParam: 'v', default: 'current', label: 'Current'},
};

function formatDocScope(product, version) {
  return `${product}::${version}`;
}

function defaultDocScope() {
  return formatDocScope(
    DOC_SCOPE_DIMENSIONS.product.default,
    DOC_SCOPE_DIMENSIONS.version.default,
  );
}

function docScopeFacetFilter(scope = defaultDocScope()) {
  return `doc_scope:${scope}`;
}

function pageDocScopesFromPathname(pathname) {
  const base = defaultDocScope();
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized.includes('/search')) {
    return [];
  }
  return [base];
}

module.exports = {
  DOC_SCOPE_DIMENSIONS,
  formatDocScope,
  defaultDocScope,
  docScopeFacetFilter,
  pageDocScopesFromPathname,
};
