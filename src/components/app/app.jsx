import { Routes, Route } from 'react-router-dom';

import AppHeader from "../app-header/app-header";

//pages
import Layout from '../../pages/layout/layout';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Profile from '../../pages/profile/profile';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import IngredientPage from '../../pages/ingredients-page/ingredients-page';
import Home from '../../pages/home/home';

function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                {/* <Route path="/" element={<Layout />}/> */}
                <Route index element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/ingredient-page" element={<IngredientPage />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </>
    );
}

export default App;
