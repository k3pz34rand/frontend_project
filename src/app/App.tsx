import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { ClassNames } from "shared/lib/helpers/ClassNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/navBar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={ClassNames("app", {}, [theme])}>
            <NavBar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
