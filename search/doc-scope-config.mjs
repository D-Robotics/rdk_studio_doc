/**
 * Doc scope dimensions for search indexing and frontend facet filters.
 * Values are stored in Algolia as filterOnly(doc_scope): "product::version"
 */
export const DOC_SCOPE_DIMENSIONS = {
  product: {
    queryParam: 'p',
    default: 'rdk_studio',
    label: 'RDK Studio',
  },
  version: {
    queryParam: 'v',
    default: 'current',
    label: 'Current',
  },
};

/** @returns {string} e.g. rdk_studio::current */
export function formatDocScope(product, version) {
  return `${product}::${version}`;
}

export function defaultDocScope() {
  return formatDocScope(
    DOC_SCOPE_DIMENSIONS.product.default,
    DOC_SCOPE_DIMENSIONS.version.default,
  );
}

/** Algolia facet filter string */
export function docScopeFacetFilter(scope = defaultDocScope()) {
  return `doc_scope:${scope}`;
}

/**
 * Page pathname → doc_scope[] (intersection semantics at block level).
 * Extend when sidebar/doc scope rules grow; default covers all docs routes.
 */
export function pageDocScopesFromPathname(pathname, locale) {
  const base = defaultDocScope();
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized.includes('/search')) {
    return [];
  }
  return [base];
}

export function appendScopeQueryToUrl(url, product, version) {
  const {queryParam: pKey} = DOC_SCOPE_DIMENSIONS.product;
  const {queryParam: vKey} = DOC_SCOPE_DIMENSIONS.version;
  try {
    const u = new URL(url, 'https://placeholder.local');
    u.searchParams.set(pKey, product);
    u.searchParams.set(vKey, version);
    const out = u.pathname + u.search + u.hash;
    return out.startsWith('http') ? out : out;
  } catch {
    return url;
  }
}
