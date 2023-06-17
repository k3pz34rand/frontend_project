import { ClassNames } from "shared/lib/helpers/ClassNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={ClassNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={"/"}
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Main page
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
                    About page
                </AppLink>
            </div>
        </div>
    );
};
