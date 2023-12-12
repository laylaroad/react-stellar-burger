import { FC } from 'react';
import OrderInfo from '../../components/order-info/order-info';

const OrderInfoPage: FC = () => {

  return (

    <OrderInfo
      isModal={false}
      status={true}
    />

  );
};

export default OrderInfoPage;
