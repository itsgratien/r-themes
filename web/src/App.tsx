import React from 'react';
import { ThemeContext } from 'src/contexts/ThemeContext';
import { ThemeEnum } from 'src/__generated__/Theme';
import './App.scss';
import classname from 'classnames';
import { useTheme } from 'src/hooks/UseTheme';
import { Icon } from '@iconify/react';

const App = () => {
  const [theme, setTheme] = React.useState(ThemeEnum.Default);

  const { bgColor, textColor, selectClass } = useTheme({ name: theme });

  const toggleTheme = (value: ThemeEnum) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ name: theme }}>
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
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
