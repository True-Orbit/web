import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MODELS, defaults } from '.';

export interface usebasicSearchProps {
  searchType: string;
  api: any;
  searchOptions: any;
  enabled: boolean;
}

export const usebasicSearch = ({
  searchType,
  api,
  searchOptions,
  enabled,
}: usebasicSearchProps): UseQueryResult<{ data: unknown[], pagination: MODELS.Pagination }> =>
  useQuery({
    enabled,
    queryKey: [searchType, 'search', searchOptions],
    queryFn: () => api.search(searchOptions),
    placeholderData: { data: [], pagination: { ...defaults.pagination } },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });