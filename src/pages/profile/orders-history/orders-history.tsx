import styles from './orders-history.module.css';
import { FC, useEffect } from 'react';
import OrderList from '../../../components/order-list/order-list';
import { wssUrl } from '../../../utils/api';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';

import { IOrder } from '../../../types/order-types';

const OrdersHistory: FC = () => {
    // const location = useLocation();
    // const dispatch = useAppDispatch();
    // const accessToken = localStorage.getItem("accessToken")?.split("Bearer ")[1];

    // const selectAllOrders = (store: any) => store.feedApi.allOrders;

    // const allOrders = useAppSelector(selectAllOrders);

    return (
        // <div className={styles.orders}>
        //     {allOrders.orders.map((order: IOrder) => (
        //         <OrderList key={order._id} order={order} />
        //     ))}
        // </div>
        (null)
    )
}

export default OrdersHistory;
