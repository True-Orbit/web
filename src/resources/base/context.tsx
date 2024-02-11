import { createContext } from 'react';
import { defaults, MODELS } from '.';

export const BaseContext = createContext<MODELS.Context>(defaults.context);
