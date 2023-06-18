import { createContext } from 'react';

export enum Theme {
    LIGTH = 'ligth',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setThem?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
