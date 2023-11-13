import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//pages
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ProfileMenu from '../../pages/profile-menu/profile-menu';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import IngredientPage from '../../pages/ingredients-page/ingredients-page';
import Layout from '../../pages/layout-page/layout-page';
import Home from '../../pages/home-page/home-page';
import Orders from '../../pages/orders/orders';

import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { checkUserAuth } from '../../utils/api';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { modalClose } from '../../services/reducers/modalReducer';



function App() {

    const dispatch = useDispatch();
    const location = useLocation();
    const background = location.state && location.state.background;

    useEffect(() => {
        dispatch(checkUserAuth());
    }, []);

    const handleClose = () => {
        dispatch(modalClose());
    }

    return (
        <>
            <Routes location={background || location}>
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
                        element={<ProfileMenu />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="ingredients/:id" element={<IngredientPage />} />
                    <Route path="*" element={<NotFound404 />} />
                </Route>
            </Routes>

            {
                background && (
                    <Routes>
                        <Route
                            path="ingredients/:id" element={
                                <Modal
                                    title={'Детали ингредиента'}
                                    handleClose={handleClose}>
                                    <IngredientDetails />
                                </Modal>
                            } />
                    </Routes>
                )
            }
        </>
    )
};

export default App;
