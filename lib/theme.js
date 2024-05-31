import {
  createContext,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  return (
    <ThemeContext.Provider>
      {children}
    </ThemeContext.Provider>
  );
}
