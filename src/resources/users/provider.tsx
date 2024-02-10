import { useReducer } from 'react';
import { BaseProvider } from '@/resources/base';
import { Context, UserApi, reducer, defaults, MODELS } from '.';

const api = new UserApi();

export const Provider = ({ children }: MODELS.ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaults.state);

  return (
    <BaseProvider<MODELS.User> api={api} Context={Context} state={state} dispatch={dispatch}>
      {children}
    </BaseProvider>
  );
};
