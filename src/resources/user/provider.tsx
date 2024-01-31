import { ReactNode, useReducer } from 'react';
import { BaseProvider, BaseProviderProps } from '@/resources/base';
import { UserContext, UserApi, reducer, defaultState, UserContextModel, UserModel } from '.';

interface UserProviderProps extends BaseProviderProps<UserModel, UserContextModel> {
  children: ReactNode;
}

const api = new UserApi();

export const Provider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return <BaseProvider api={api} Context={UserContext}>{children}</BaseProvider>;
};
