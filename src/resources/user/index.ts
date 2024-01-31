export * from './models';
export * from './api';
export * from './context';
export * from './provider';
export * from './defaults';
export * as reducers from './reducers';

import * as reducers from './reducers';
import { UserActionModel, UserStateModel } from './models';
import { reducers as fetchReducers } from '@/resources/fetch';
import { createReducer } from '@/resources/base';

export const reducer = createReducer({ ...fetchReducers, ...reducers });
