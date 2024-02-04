export * from './models';
export * from './defaults';
export * from './provider';
export * from './context';
export * from './api';
export * from './fetch-client';
export * from './combine';
export * as reducers from './reducers';

import { reducers as fetchReducers } from '@/resources/fetch';
import { BaseStateModel, BaseResourceModel } from '.';
import * as reducers from './reducers';

export const baseReducers = <RM = BaseResourceModel, SM = BaseStateModel>(state: SM) => ({
  ...fetchReducers,
  ...reducers,
});

