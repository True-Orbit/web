import { createContext } from 'react';
import { UserContextModel, defaults } from '.';
export const UserContext = createContext<UserContextModel>(defaults.context);
