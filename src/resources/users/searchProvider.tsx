import { SearchProvider } from '@/resources/base';
import { SearchContext, UserApi, searchReducer, MODELS } from '.';

const api = new UserApi();

export const Provider = ({ children }: MODELS.ProviderProps) => {
  return (
    <SearchProvider<MODELS.User> searchType="user" api={api} context={SearchContext} reducers={searchReducer}>
      {children}
    </SearchProvider>
  );
};
