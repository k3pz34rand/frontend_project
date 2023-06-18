import { ClassNames } from 'shared/lib/helpers/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();
    const toggleSwitchLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            className={ClassNames(cls.LangSwitcher, {}, [className, 'clear'])}
            onClick={toggleSwitchLang}
            theme={ThemeButton.CLEAR}
        >
            {t('язык')}
        </Button>
    );
}
