import { FC, Key } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { useLocation } from 'react-router-dom';
import { modalOpen } from '../../services/reducers/modalReducer';
import { selectOrders } from '../../services/selectors/ordersFeedSelector';

import OrderInfo from '../../components/order-info/order-info';
import { Link } from 'react-router-dom';

import { IOrder } from '../../types/order-types';

const OrderInfoPage: FC = () => {

  return (

    <OrderInfo
      isModal={false}
      status={true}
    />

  );
};

export default OrderInfoPage;
