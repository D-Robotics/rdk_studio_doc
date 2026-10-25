import {useMemo} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {
  DOC_SCOPE_DIMENSIONS,
  formatDocScope,
  docScopeFacetFilter,
  appendScopeQueryToUrl,
} from './config';

export function readDocScopeFromSearch(search) {
  const params = new URLSearchParams(search);
  const product =
    params.get(DOC_SCOPE_DIMENSIONS.product.queryParam) ||
    DOC_SCOPE_DIMENSIONS.product.default;
  const version =
    params.get(DOC_SCOPE_DIMENSIONS.version.queryParam) ||
    DOC_SCOPE_DIMENSIONS.version.default;
  return {product, version, scope: formatDocScope(product, version)};
}

export function useDocScopeSearch() {
  const {search} = useLocation();
  return useMemo(() => readDocScopeFromSearch(search), [search]);
}

export function useDocScopeFacetFilters() {
  const {scope} = useDocScopeSearch();
  return useMemo(() => [docScopeFacetFilter(scope)], [scope]);
}

export function useAppendDocScopeToUrl() {
  const {product, version} = useDocScopeSearch();
  return (url) => appendScopeQueryToUrl(url, product, version);
}
