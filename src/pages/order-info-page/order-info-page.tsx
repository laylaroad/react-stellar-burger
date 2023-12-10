import { FC, Key } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { useLocation } from 'react-router-dom';
import { modalOpen } from '../../services/reducers/modalReducer';
import { selectOrders } from '../../services/selectors/ordersFeedSelector';

import OrderInfo from '../../components/order-info/order-info';
import { Link } from 'react-router-dom';

import { IOrder } from '../../types/order-types';

const OrderInfoPage: FC = () => {
  const location = useLocation();
  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(modalOpen('order-info'));
  };


  return (
    <>
      {orders?.map((order: IOrder) => (
        <Link
          key={order.number}
          state={{ background: location }}
          onClick={openModal}
          to={{
            pathname: location.pathname.startsWith('/profile')
              ? `/profile/orders/${order.number}`
              : `/feed/${order.number}`,
          }}
        >
          <OrderInfo
            status={true}
          />
        </Link>
      ))}
    </>
  );
};

export default OrderInfoPage;
