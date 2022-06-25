import React from 'react';
import {
  ThemeContextT,
  ThemeEnum,
  AuthContextT,
} from 'src/__generated__/Theme';

export const ThemeContext = React.createContext<ThemeContextT>({
  name: ThemeEnum.Default,
});

export const AuthContext = React.createContext<AuthContextT>({ isAuth: false, setIsAuth: ()=> {} });
