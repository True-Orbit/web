import React, { ReactNode, Component, } from 'react';
import { BaseContext, defaultContext, BaseApi, BaseContextModel } from '.';

export interface BaseProviderProps<T> {
  api: BaseApi<T>;
  children: ReactNode;
}

export abstract class BaseProvider<T> extends Component<BaseProviderProps<T>, {}> {
  protected find: (id: string) => Promise<T>;
  protected create: (item: Partial<T>) => Promise<T>;
  protected update: (item: Partial<T>) => Promise<T>;
  protected remove: (id: string) => Promise<T>;
  protected contextValue: BaseContextModel<T>;

  constructor(props: BaseProviderProps<T>) {
    super(props);

    this.find = async (id: string): Promise<T> => {
      const response = await props.api.find(id);
      return response.data;
    }
  
    this.create = async (item: Partial<T>): Promise<T> => {
      const response = await props.api.create(item);
      return response.data;
    }
  
    this.update = async (item: Partial<T>): Promise<T> => {
      const response = await props.api.update(item);
      return response.data;
    }
  
    this.remove = async (id: string): Promise<T> => {
      const response = await props.api.delete(id);
      return response.data;
    }

    this.contextValue = {
      ...defaultContext,
      find: this.find,
      create: this.create,
      update: this.update,
      remove: this.remove,
    };
  }
}