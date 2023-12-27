import { ThemeContext, ThemeContextProps, LOCAL_STORAGE_THEME_KEY, Theme } from "../lib/ThemeContext";
import React, { FC, useMemo, useState } from "react";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
const ThemeProvider: FC<{ children: React.ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    
    const defaultProps = useMemo<ThemeContextProps>(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
