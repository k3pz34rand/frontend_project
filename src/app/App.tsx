import { useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { NavBar } from 'widgets/navBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export function App() {
    const { theme } = useTheme();

    return (
        <div
            className={ClassNames('app', {}, [theme])}
            id="my_app"
        >
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
