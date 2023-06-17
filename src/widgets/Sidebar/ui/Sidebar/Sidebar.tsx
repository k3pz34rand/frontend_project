import { ClassNames } from "shared/lib/helpers/ClassNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={toggleCollapsed}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
