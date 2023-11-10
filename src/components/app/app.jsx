import { Routes, Route } from 'react-router-dom';

import AppHeader from "../app-header/app-header";

//pages
import MainSection from '../../pages/main-section/main-section';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Profile from '../../pages/profile/profile';
import NotFound404 from '../../pages/not-found-404/not-found-404';


function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </>
    );
}

export default App;
