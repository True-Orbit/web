export * from './models';
export * from './api';
export * from './context';
export * from './provider';
export * from './defaults';
export * as reducers from './reducers';

import { createReducer, baseReducers } from '@/resources/base';
import { reducers } from '.';

export const reducer = createReducer({ ...baseReducers, ...reducers });
