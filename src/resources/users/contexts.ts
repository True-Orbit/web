import { createContext } from 'react';
import { MODELS, defaults } from '.';

export const SearchContext = createContext<MODELS.SearchContext>(defaults.searchContext);
