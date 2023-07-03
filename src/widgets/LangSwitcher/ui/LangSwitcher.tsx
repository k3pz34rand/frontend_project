import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();
    const toggleSwitchLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            className={ClassNames('', {}, [className, 'clear'])}
            onClick={toggleSwitchLang}
            theme={ThemeButton.CLEAR}
        >
            {t('язык')}
        </Button>
    );
}
