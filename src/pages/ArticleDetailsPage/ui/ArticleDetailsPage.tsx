import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={ClassNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Article Details Page')}
        </div>
    );
};

export default ArticleDetailsPage;
