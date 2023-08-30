import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={ClassNames(cls.ArticlesPage, {}, [className])}>
            {t('acticles page')}
        </div>
    );
};

export default ArticlesPage;
