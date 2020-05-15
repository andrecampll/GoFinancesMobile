import React, {useState, useCallback, createContext} from 'react';

// import { Container } from './styles';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const Theme: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  const Context = createContext(toggleTheme);

  return <Context.Provider value={toggleTheme} />;
};

export default Theme;
