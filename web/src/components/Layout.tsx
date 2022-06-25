import React from 'react';
import '../App.scss';
import { LayoutPropsT } from 'src/__generated__/Shared';
import { ThemeContext, AuthContext } from 'src/contexts/ThemeContext';
import { useTheme } from 'src/hooks/UseTheme';
import classname from 'classnames';
import { ThemeEnum } from 'src/__generated__/Theme';
import { Icon } from '@iconify/react';

export const Layout = ({ children }: LayoutPropsT) => {
  const [theme, setTheme] = React.useState(ThemeEnum.Default);

  const [isAuth, setIsAuth] = React.useState<boolean>(
    localStorage.getItem('isAuth') === 'true' ? true : false
  );

  const { bgColor, textColor, selectClass } = useTheme({ name: theme });

  const toggleTheme = (value: ThemeEnum) => {
    setTheme(value);
  };

  const handleAuth = () => {
    localStorage.setItem('isAuth', String(!isAuth));
    setIsAuth(!isAuth);
  };

  return (
    <ThemeContext.Provider value={{ name: theme }}>
      <AuthContext.Provider value={{ isAuth, setIsAuth: handleAuth }}>
        <div className={classname('App', bgColor)}>
          <div className="icon">
            <Icon icon="la:react" fontSize={150} className={textColor} />
          </div>
          <div className="welcome">
            <span className={classname(textColor)}>
              Welcome to our react application
            </span>
          </div>
          <div className="select">
            <select
              value={theme}
              onChange={(e) => toggleTheme(e.target.value as ThemeEnum)}
              className={selectClass}
            >
              {Object.values(ThemeEnum).map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="children">{children}</div>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};
