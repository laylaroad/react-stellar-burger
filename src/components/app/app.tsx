import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { FC } from 'react';

//pages
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';
import Layout from '../../pages/layout-page/layout-page';
import Home from '../../pages/home-page/home-page';
import FeedPage from '../../pages/feed-page/feed-page';
import OrderInfo from '../order-info/order-info';
import ProfileMain from '../../pages/profile/profile-main/profile-main';
import ProfileNavigation from '../../pages/profile/profile-navigation/profile-navigation';
import OrdersHistory from '../../pages/profile/orders-history/orders-history';
import IngredientDetails from '../ingredient-details/ingredient-details';

//protected-route
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { checkUserAuth, allOrdersWsApiPath, userOrdersWsApiPath } from '../../utils/api';

import Modal from '../modal/modal';
import { modalClose } from '../../services/reducers/modalReducer';

import { selectIngredientsIsLoading } from '../../services/selectors/ingredientsSelector';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';




const App: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const isLoading = useAppSelector(selectIngredientsIsLoading);


  useEffect(() => {
    dispatch(checkUserAuth());

    dispatch(getIngredientsData());
  }, [dispatch]);

  const onClose = () => {

    dispatch(modalClose())
    navigate(-1);
  };

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<OnlyUnAuth component={<Register />} />} />
          <Route path="login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="reset-password" element={<OnlyUnAuth component={<ResetPassword />} />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="profile" element={<OnlyAuth component={<ProfileNavigation />} />}>
            <Route index element={<ProfileMain />} />
            <Route path="orders" element={<OrdersHistory />} />
          </Route>
          <Route path="feed" element={<FeedPage />} />
          <Route path="feed/:id" element={<OrderInfo isModal={false} status={true} wsApiPath={userOrdersWsApiPath} />} />
          <Route path="ingredients/:id" element={<IngredientPage />} />
          <Route path="profile/orders/:id" element={<OnlyAuth component={<OrderInfo isModal={false} status={true} wsApiPath={allOrdersWsApiPath} />} />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>

      {background && (

        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal title="Детали ингредиента" onClose={onClose}>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <IngredientDetails />
                )}
              </Modal>
            }
          />

          <Route
            path="feed/:id"
            element={
              <Modal title="" onClose={onClose}>
                <OrderInfo isModal={true} status={true} wsApiPath={userOrdersWsApiPath}
                />
              </Modal>
            }
          />
          <Route
            path="profile/orders/:id"
            element={
              <Modal title="" onClose={onClose}>
                <OrderInfo isModal={true} status={true} wsApiPath={allOrdersWsApiPath}
                />
              </Modal>
            }
          />

        </Routes>
      )}

    </>
  );
};

export default App;
