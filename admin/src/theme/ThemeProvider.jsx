import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

const ThemeModeContext = createContext(null);

const STORAGE_KEY = "admin_theme_mode";

function readInitialMode() {
  if (typeof window === "undefined") return "light";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {
    // ignore
  }
  // Optional: could use prefers-color-scheme. Keeping deterministic.
  return "light";
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx)
    throw new Error(
      "useThemeMode must be used within ThemeModeContext.Provider",
    );
  return ctx;
}

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => readInitialMode());

  // Apply data-theme attribute ASAP (no flicker)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#2563eb" },
        },
        shape: { borderRadius: 14 },
      }),
    [mode],
  );

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
}
