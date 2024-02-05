export * from './models';
export * from './defaults';
export * from './provider';
export * from './context';
export * from './api';
export * from './fetchClient';
export * from './combine';
export * as reducers from './reducers';

import { reducers as fetchReducers } from '@/resources/fetch';
import * as reducers from './reducers';

export const baseReducers = {
  ...fetchReducers,
  ...reducers,
};
