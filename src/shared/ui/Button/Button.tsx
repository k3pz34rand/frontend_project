import { ClassNames } from "shared/lib/helpers/ClassNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...other } = props;
    return (
        <button
            className={ClassNames(cls.Button, {}, [className, cls[theme]])}
            {...other}
        >
            {children}
        </button>
    );
};
