import { Routes, Route } from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import MainSection from '../../pages/main-section/main-section';

import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ProfileEdit from '../../pages/profile-edit/profile-edit';
import NoPage from '../../pages/no-page/no-page';



function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile-edit" element={<ProfileEdit />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;
