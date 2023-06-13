import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { routeConfig } from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route element={element} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
