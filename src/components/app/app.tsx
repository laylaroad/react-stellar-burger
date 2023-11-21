import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import  { FC } from 'react';

//pages
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';
import Layout from '../../pages/layout-page/layout-page';
import Home from '../../pages/home-page/home-page';

//profile
import ProfileMain from '../../pages/profile/profile-main/profile-main';
import ProfileNavigation from '../../pages/profile/profile-navigation/profile-navigation';
import Orders from '../../pages/profile/orders/orders';

//protected-route
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { checkUserAuth } from '../../utils/api';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { modalClose } from '../../services/reducers/modalReducer';

import {selectIngredientById} from '../../services/selectors/ingredientsSelector';

import { getIngredientsData } from '../../services/reducers/ingredientsReducer';


const App: FC = () => {{

    const dispatch = useDispatch();
    const location = useLocation();
    const background = location.state && location.state.background;
    const params = useParams();
    const ingredient = useSelector(selectIngredientById(params.id));

    useEffect(() => {
        dispatch(checkUserAuth());
        dispatch(getIngredientsData());
    }, []);


    const onClose = (): void => {
        dispatch(modalClose());
      };

    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="register"
                        element={<OnlyUnAuth component={<Register />} />}
                    />
                    <Route path="login" element={<OnlyUnAuth component={<Login />} />} />
                    <Route path="reset-password" element={<OnlyUnAuth component={<ResetPassword />} />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />

                    <Route path="profile" element={<OnlyAuth component={<ProfileNavigation />} />}>
                        <Route index element={<ProfileMain />} />
                        <Route path="orders" element={<Orders />} />
                    </Route>
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
                                    onClose={onClose}>
                                    <IngredientDetails ingredient={ingredient}/>
                                   
                                </Modal>
                            } />
                    </Routes>
                )
            }
    </>
    )
};
};


export default App;

