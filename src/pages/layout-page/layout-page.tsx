
import { Outlet } from 'react-router-dom';
import {FC } from 'react';

import AppHeader from '../../components/app-header/app-header';

const Layout: FC = () => {
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
