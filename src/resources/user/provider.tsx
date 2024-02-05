import { useReducer } from 'react';
import { BaseProvider } from '@/resources/base';
import { UserContext, UserApi, reducer, defaultState, UserProviderProps, UserModel } from '.';

const api = new UserApi();

export const Provider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <BaseProvider<UserModel> api={api} Context={UserContext} state={state} dispatch={dispatch}>
      {children}
    </BaseProvider>
  );
};
