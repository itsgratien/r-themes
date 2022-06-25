import React from 'react';
import { ThemeContextT, ThemeEnum } from 'src/__generated__/Theme';

export const ThemeContext = React.createContext<ThemeContextT>({
  name: ThemeEnum.Default,
});
