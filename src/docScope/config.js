export const DOC_SCOPE_DIMENSIONS = {
  product: {queryParam: 'p', default: 'rdk_studio', label: 'RDK Studio'},
  version: {queryParam: 'v', default: 'current', label: 'Current'},
};

export function formatDocScope(product, version) {
  return `${product}::${version}`;
}

export function defaultDocScope() {
  return formatDocScope(
    DOC_SCOPE_DIMENSIONS.product.default,
    DOC_SCOPE_DIMENSIONS.version.default,
  );
}

export function docScopeFacetFilter(scope = defaultDocScope()) {
  return `doc_scope:${scope}`;
}

export function appendScopeQueryToUrl(url, product, version) {
  const {queryParam: pKey} = DOC_SCOPE_DIMENSIONS.product;
  const {queryParam: vKey} = DOC_SCOPE_DIMENSIONS.version;
  try {
    const base =
      typeof window !== 'undefined' ? window.location.origin : 'https://local';
    const u = new URL(url, base);
    u.searchParams.set(pKey, product);
    u.searchParams.set(vKey, version);
    return `${u.pathname}${u.search}${u.hash}`;
  } catch {
    return url;
  }
}
