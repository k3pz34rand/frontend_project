import { ClassNames } from 'shared/lib/helpers/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export function NavBar({ className }: NavBarProps) {
    return (
        <div className={ClassNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Main page
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    About page
                </AppLink>
            </div>
        </div>
    );
}
