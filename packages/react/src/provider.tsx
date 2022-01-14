import * as React from 'react'
export type ThemeProviderType<T> = React.ComponentType<{
    children: React.ReactNode
    theme?: T
}>

function createThemeProvider<T>(
    defaultTheme: T,
    ThemeContext: React.Context<T>
): ThemeProviderType<T> {
    return ({ children, theme }) => {
        return (
            <ThemeContext.Provider value={theme || defaultTheme}>{children}</ThemeContext.Provider>
        )
    }
}

export default createThemeProvider
