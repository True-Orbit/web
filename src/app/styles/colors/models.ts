import { CSSObject } from '@mui/material/styles';
import { models as themeModels } from '@/app/styles/themes';
import { components } from '.';

export type ComponentNames = keyof typeof components;

export type ComponentColors = {
  [key in ComponentNames]: {
    [key in themeModels.ThemeNames]: CSSObject;
  };
}