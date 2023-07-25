import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Имя пользователя')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Пароль')}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
