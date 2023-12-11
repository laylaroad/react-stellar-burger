import styles from './orders-history.module.css';
import { FC, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import Order from '../../../components/order/order';
import { wssUrl } from '../../../utils/api';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
import { IOrder } from '../../../types/order-types';
import { setCurrentOrder } from '../../../services/reducers/ordersFeedReducer';
import { modalOpen } from '../../../services/reducers/modalReducer';
import order from '../../../components/order/order';

import { setAllOrders } from '../../../services/reducers/feedReducer';



import { wsConnect } from '../../../services/reducers/wsActions';


const OrdersHistory: FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const accessToken = localStorage.getItem("accessToken")?.split("Bearer ")[1];

    const selectAllOrders = (store: any) => store.feedApi.allOrders;
    const allOrders = useAppSelector(selectAllOrders);

    const modalOrderInfo = () => {
        dispatch(setCurrentOrder(order))
        dispatch(modalOpen('order-info'));
    };

    useEffect(() => {
        // console.log('Connecting to WebSocket...');
        // dispatch(wsConnect('wss://norma.nomoreparties.space/orders'));
        dispatch(wsConnect(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));
    })

    if (allOrders) {
        return (
            <section className={styles.feed}>
                <ul className={styles.orders}>
                    {allOrders.orders.map((order: IOrder) => (
                        <Link
                            style={{ textDecoration: 'none' }}
                            state={{ background: location }}
                            to={`${order._id}`}
                            onClick={(e: any) => {
                                modalOrderInfo();
                            }}
                            key={order._id}
                        >
                            <li>
                                <Order key={order._id} order={order} status={order.status} showOrderStatus={true} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>
        )
    } else {
        return <>loading</>;
    }
}

export default OrdersHistory;
