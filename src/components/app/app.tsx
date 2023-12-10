import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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

//profile
import ProfileMain from '../../pages/profile/profile-main/profile-main';
import ProfileNavigation from '../../pages/profile/profile-navigation/profile-navigation';
import OrdersHistory from '../../pages/profile/orders-history/orders-history';

//protected-route
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { checkUserAuth } from '../../utils/api';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { modalClose } from '../../services/reducers/modalReducer';

import { selectIngredientsIsLoading } from '../../services/selectors/ingredientsSelector';

import { getIngredientsData } from '../../services/reducers/ingredientsReducer';
import OrderInfo from '../order-info/order-info';
import { useAppSelector } from '../../hooks/react-redux';
import { selectCurrentOrder } from '../../services/selectors/ordersFeedSelector';

import { IOrder } from '../../types/order-types';
import OrderInfoPage from '../../pages/order-info-page/order-info-page';


const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const isLoading = useSelector(selectIngredientsIsLoading);

  // const order=useAppSelector(selectOrder) as IOrder | null;


  useEffect(() => {
    dispatch(checkUserAuth());

    console.log("Dispatching getIngredientsData");
    dispatch(getIngredientsData());
  }, [dispatch]);

  const onClose = () => {
    console.log('Closing modal...');
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
          {/* <Route path="profile" element={<OnlyAuth component={<ProfileNavigation />} />}> */}
          <Route path="profile" element={<ProfileNavigation />}>
            <Route index element={<ProfileMain />} />
            <Route path="orders" element={<OrdersHistory />} />
            <Route path="orders/:id" element={<OrderInfoPage />} />
          </Route>
          <Route path="feed" element={<FeedPage />} />
          <Route path="feed/:id" element={<OrderInfo isModal={false} status={true} />} />

          <Route path="ingredients/:id" element={<IngredientPage />} />
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
                <OrderInfo isModal={true} status={true}
                />
              </Modal>
            }
          />
          <Route
            path="profile/orders/:id"
            element={

              <Modal title="" onClose={onClose}>
                <OrderInfo isModal={true} status={true}
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
