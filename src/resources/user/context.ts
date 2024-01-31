import { createContext } from 'react';
import { defaultContext, UserContextModel } from '.';

export const UserContext = createContext<UserContextModel>(defaultContext);
