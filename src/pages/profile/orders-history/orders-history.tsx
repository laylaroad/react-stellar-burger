import styles from './orders-history.module.css';
import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Order from '../../../components/order/order';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
import { IOrder } from '../../../types/order-types';
import { setCurrentOrder } from '../../../services/reducers/ordersFeedReducer';
import { modalOpen } from '../../../services/reducers/modalReducer';
import { selectAllOrders } from '../../../services/selectors/feedSelector';
import { wsConnect, wsDisconnect } from '../../../services/reducers/wsActions';

import { userOrdersWsApiPath } from '../../../utils/api';
interface IOrdersHistoryProps {
    order?: IOrder | null;
}

const OrdersHistory: FC<IOrdersHistoryProps> = ({ order }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const allOrders = useAppSelector(selectAllOrders);

    useEffect(() => {
        dispatch(wsConnect(userOrdersWsApiPath));
        return () => {
            dispatch(wsDisconnect(userOrdersWsApiPath));
        };
    }, [location.pathname]);

    const modalOrderInfo = () => {
        dispatch(setCurrentOrder(order))
        dispatch(modalOpen('order-info'));
    };


    if (allOrders) {
        const sortedOrders = allOrders.orders.toSorted((a: any, b: any) => {
            const dateA = new Date(a.createdAt) as any;
            const dateB = new Date(b.createdAt) as any;
            return dateB - dateA;
        });

        return (
            <section className={styles.feed}>
                <ul className={styles.orders}>
                    {sortedOrders.map((order: IOrder) => (
                        <Link
                            className={styles.link}
                            state={{ background: location }}
                            to={`${order._id}`}
                            onClick={(e) => {
                                modalOrderInfo();
                            }}
                            key={order._id}
                        >

                            <Order key={order._id} order={order} status={order.status} showOrderStatus={true} />

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
