import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...other
    } = props;
    return (
        <button
            type="button"
            className={ClassNames(cls.Button, {}, [className, cls[theme]])}
            {...other}
        >
            {children}
        </button>
    );
};
