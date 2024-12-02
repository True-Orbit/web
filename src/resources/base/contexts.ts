import { createContext } from 'react';
import { MODELS, defaults } from '.';

export const ItemContext = createContext<MODELS.ItemContext>(defaults.itemContext);
export const SearchContext = createContext<MODELS.SearchContext>(defaults.searchContext);