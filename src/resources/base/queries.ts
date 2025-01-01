import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MODELS, defaults, BaseApi } from '.';

export interface useBasicSearchProps {
  searchType: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  api: BaseApi<any>;
  searchOptions: Record<string, unknown>;
  enabled: boolean;
}

export const useBasicSearch = ({
  searchType,
  api,
  searchOptions,
  enabled,
}: useBasicSearchProps): UseQueryResult<{ data: unknown[]; pagination: MODELS.Pagination }> =>
  useQuery({
    enabled,
    queryKey: [searchType, 'search', searchOptions],
    queryFn: () => api.search(searchOptions),
    placeholderData: { data: [], pagination: { ...defaults.pagination } },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
