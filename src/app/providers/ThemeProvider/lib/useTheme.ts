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
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setThem(newTheme);
    };
    return { theme, toggleTheme };
}
