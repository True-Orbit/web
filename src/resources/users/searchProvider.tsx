import { SearchProvider } from '@/resources/base';
import { SearchContext, api as userApi, searchReducer, MODELS } from '.';

export const Provider = ({ children }: MODELS.ProviderProps) => {
  return (
    <SearchProvider<MODELS.User> searchType="user" api={userApi} context={SearchContext} reducers={searchReducer}>
      {children}
    </SearchProvider>
  );
};
