import * as React from "react";
import createThemeProvider from "./createThemeProvider";
import createWithTheme from "./createWithTheme";
import type { WithThemeType } from "./createWithTheme";
import type { ThemeProviderType } from "./createThemeProvider";

export type ThemingType<T> = {
  ThemeContext: React.Context<T>;
  ThemeProvider: ThemeProviderType<T>;
  withTheme: WithThemeType<T>;
  useTheme(overrides?: Partial<T>): T;
};

export default function createTheming<T extends Record<string, any>>(
  defaultTheme: T
): ThemingType<T> {
  const ThemeContext: React.Context<T> = React.createContext(defaultTheme);
  const ThemeProvider: ThemeProviderType<T> = createThemeProvider(
    defaultTheme,
    ThemeContext
  );
  const withTheme: WithThemeType<T> = createWithTheme(
    ThemeProvider,
    ThemeContext
  );

  const useTheme = (overrides?: T): T => {
    const theme = React.useContext(ThemeContext);
    const result = React.useMemo(
      () =>
        theme && overrides ? deepmerge(theme, overrides) : theme || overrides,
      [theme, overrides]
    );
    return result;
  };

  return {
    ThemeContext,
    ThemeProvider,
    withTheme,
    useTheme,
  };
}
