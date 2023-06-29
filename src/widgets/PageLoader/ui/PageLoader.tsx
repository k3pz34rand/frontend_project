import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={ClassNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
