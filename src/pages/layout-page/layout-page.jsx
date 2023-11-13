
import { Outlet } from 'react-router-dom';

import AppHeader from '../../components/app-header/app-header';

function Layout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;
