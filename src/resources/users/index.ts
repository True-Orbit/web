export * as MODELS from './models';
export * from './api';
export * as defaults from './defaults';
export * as reducers from './reducers';
export * from './context';
export * from './provider';

import { createReducer, baseReducers } from '@/resources/base';
import { reducers } from '.';

export const reducer = createReducer({ ...baseReducers, ...reducers });
