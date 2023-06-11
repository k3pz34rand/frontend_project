import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./styles/index.scss";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import { Link } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { ClassNames } from "./help/ClassNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={ClassNames("app", {}, [theme])}>
            <Link to={"/"}>Main page</Link>
            <Link to={"/about"}>About page</Link>
            <button onClick={() => toggleTheme()}>change theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageLazy />} />
                    <Route path={"/about"} element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};
