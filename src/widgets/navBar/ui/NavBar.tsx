import React, { memo, useCallback, useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={ClassNames(cls.navBar, {}, [className])}>
            {authData ? (
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.links}
                        theme={ThemeButton.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                </>
            )}
        </div>
    );
});
