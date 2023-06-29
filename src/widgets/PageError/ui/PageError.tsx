import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={ClassNames(cls.PageError, {}, [className])}>
            <p>{t('На странице произощла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
