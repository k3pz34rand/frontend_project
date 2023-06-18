import { ClassNames } from 'shared/lib/helpers/ClassNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LigthIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={ClassNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LigthIcon />}
        </Button>
    );
}
