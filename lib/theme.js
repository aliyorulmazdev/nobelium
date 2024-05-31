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

export default function useTheme() {
  return useContext(ThemeContext);
}