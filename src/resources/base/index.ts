export * as MODELS from './models';
export * from './api';
export * from './fetchClient';
export * from './combine';
export * as defaults from './defaults';
export * as reducers from './reducers';
export * from './context';
export * from './provider';

import { reducers as fetchReducers } from '@/resources/fetch';
import * as reducers from './reducers';

export const baseReducers = {
  ...fetchReducers,
  ...reducers,
};
