import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/helpers/ClassNames';
import { NavBar } from 'widgets/navBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export function App() {
    const { theme } = useTheme();
    return (
        <div className={ClassNames('app', {}, [theme])}>
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
