import { FC, useState, useMemo } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "./ThemeContext";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGTH;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setThem] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setThem: setThem,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
