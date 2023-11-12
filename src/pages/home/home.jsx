
import { Outlet } from 'react-router-dom';

import AppHeader from '../../components/app-header/app-header';

function Home() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Home;
