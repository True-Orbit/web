import { ReactNode } from 'react';
import { BaseProvider } from '@/resources/base';
import { UserContext, UserModel, UserApi } from '.';

interface UserProviderProps {
  children: ReactNode;
}

const api = new UserApi();

export class Provider extends BaseProvider<UserModel> {
  constructor(props: UserProviderProps) {
    super({ ...props, api });
  }

  render(): ReactNode {
    return (
      <UserContext.Provider value={this.contextValue}>
        {this.props.children}
      </UserContext.Provider> 
    );
  };
}