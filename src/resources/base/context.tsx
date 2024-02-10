import { createContext } from 'react';
import { defaults, BaseContextModel } from '.';

export const BaseContext = createContext<BaseContextModel>(defaults.context);
