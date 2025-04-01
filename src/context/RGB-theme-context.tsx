import * as React from 'react';

const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: '#555',
    color: 'white'
  }
};

export const ThemeContext = React.createContext({
    theme: "dark",
    toggleTheme: () => {},
    themes: themes
  });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>{children}</ThemeContext.Provider>
  );
};