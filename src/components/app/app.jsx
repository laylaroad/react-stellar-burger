import { Routes, Route } from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import MainSection from '../../pages/main-section/main-section';

import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NoPage from '../../pages/no-page/no-page';



function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;
