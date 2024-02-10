import { createContext } from 'react';
import { MODELS, defaults } from '.';

export const Context = createContext<MODELS.Context>(defaults.context);
