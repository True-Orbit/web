import { createContext } from 'react';
import { defaultContext, BaseContextModel } from '.';

export const BaseContext = createContext<BaseContextModel>(defaultContext);
