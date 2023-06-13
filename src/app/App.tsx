import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { ClassNames } from "shared/lib/helpers/ClassNames";
import { AppRouter } from "./providers/router";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={ClassNames("app", {}, [theme])}>
            <Link to={"/"}>Main page</Link>
            <Link to={"/about"}>About page</Link>
            <button onClick={() => toggleTheme()}>change theme</button>
            <AppRouter />
        </div>
    );
};
