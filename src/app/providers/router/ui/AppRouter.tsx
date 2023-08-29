import { Route, Routes } from 'react-router-dom';
import { Suspense, memo, useCallback, useMemo } from 'react';
import { AppRouterProps, routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from './RequireAuth';

function AppRouter() {
    const isAuth = useSelector(getUserAuthData);
    const routeWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
                path={route.path}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(routeWrapper)}
            {/* {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                    path={path}
                />
            ))} */}
        </Routes>
    );
}

export default memo(AppRouter);
