export enum ThemeEnum {
  Default = 'Default',
  Dark = 'Dark',
  Yellow = 'Yellow',
}

export interface ThemeContextT {
  name: ThemeEnum;
}

export interface UseThemeT {
  name: ThemeEnum;
}

export interface AuthContextT {
  isAuth: boolean;
  setIsAuth: () => void;
}
