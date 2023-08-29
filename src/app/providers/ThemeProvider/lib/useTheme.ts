import { Ligth } from './../../../../pages/NotFoundPage/ui/NotFoundPage.stories';
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
export function useTheme(): UseThemeResult {
    const { theme, setThem } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGTH;
                break;
            case Theme.LIGTH:
                newTheme = Theme.PURPLE;
                break;
            case Theme.PURPLE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGTH;
        }
        setThem?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGTH, toggleTheme };
}
