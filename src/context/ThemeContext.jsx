import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primary: '#ff0044',
    secondary: '#000000',
    gradient: 'linear-gradient(135deg,#ff0044,#000000)',
    logoText: 'Red Riders'
  });

  const updateTheme = (partial) => setTheme((p) => ({ ...p, ...partial }));

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
