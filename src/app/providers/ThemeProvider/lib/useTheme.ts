import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setThem } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGTH ? Theme.DARK : Theme.LIGTH;
        setThem?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGTH, toggleTheme };
}
