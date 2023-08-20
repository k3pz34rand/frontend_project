import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({
    className,
    src,
    size,
    alt = 'image',
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        const sizeStyles = {
            width: size,
            height: size,
        };
        return sizeStyles;
    }, [size]);
    return (
        <img
            className={ClassNames(cls.Avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
        />
    );
};
