import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGTH = 'rigth',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    alignItems?: TextAlign;
}

export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        alignItems = TextAlign.LEFT,
    } = props;

    const Mods = {
        [cls[theme]]: true,
        [cls[alignItems]]: true,
    };
    return (
        <div className={ClassNames(cls.Text, Mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
