import { createContext } from 'react';
import { UserContextModel } from '.';
import { defaultContext } from './defaults';
export const UserContext = createContext<UserContextModel>(defaultContext);
