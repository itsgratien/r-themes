import React from 'react';
import { UseThemeT, ThemeEnum } from 'src/__generated__/Theme';

export const useTheme = ({ name }: UseThemeT) => {
  const [bgColor, setBgColor] = React.useState<string>();

  const [textColor, setTextColor] = React.useState<string>();

  const [selectClass, setSelectClass] = React.useState<string>();

  React.useEffect(() => {
    switch (name) {
      case ThemeEnum.Default:
        setBgColor('App--default');
        setTextColor('color--dark');
        setSelectClass('select--default');
        break;
      case ThemeEnum.Yellow:
        setBgColor('App--yellow');
        setTextColor('color--dark');
        setSelectClass('select--yellow');
        break;
      case ThemeEnum.Dark:
        setBgColor('App--dark');
        setTextColor('color--yellow');
        setSelectClass('select--dark');
        break;
      default:
        setBgColor('App--default');
        setTextColor('color--dark');
        setSelectClass('select--default');
        break;
    }
  }, [name]);

  return {
    bgColor,
    textColor,
    selectClass,
  };
};
