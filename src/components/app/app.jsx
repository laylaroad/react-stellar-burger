import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//pages
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Profile from '../../pages/profile/profile';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import IngredientPage from '../../pages/ingredients-page/ingredients-page';
import Layout from '../../pages/layout-page/layout-page';
import Home from '../../pages/home-page/home-page';

import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { checkUserAuth } from '../../utils/api';



function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserAuth());
    }, []);


    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/register"
                    element={<OnlyUnAuth component={<Register />} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                    path="/profile"
                    element={<OnlyAuth component={<Profile />} />}
                />
                <Route path="/ingredient-page:id" element={<IngredientPage />} />
                <Route path="*" element={<NotFound404 />} />
            </Route>
        </Routes>
    );
}

export default App;
