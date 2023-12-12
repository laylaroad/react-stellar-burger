import styles from './orders-history.module.css';
import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Order from '../../../components/order/order';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
import { IOrder } from '../../../types/order-types';
import { setCurrentOrder } from '../../../services/reducers/ordersFeedReducer';
import { modalOpen } from '../../../services/reducers/modalReducer';
import { selectAllOrders } from '../../../services/selectors/feedSelector';
import { wsConnect } from '../../../services/reducers/wsActions';

import { userOrdersWsUrl } from '../../../utils/api';
import { setWsConnection } from '../../../services/reducers/feedReducer';
interface IOrdersHistoryProps {
    order?: IOrder | null;
}

const OrdersHistory: FC<IOrdersHistoryProps> = ({ order }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const allOrders = useAppSelector(selectAllOrders);

    useEffect(() => {
        dispatch(wsConnect(userOrdersWsUrl));
        return () => {
            dispatch(setWsConnection());
        };
    }, [location.pathname]);

    const modalOrderInfo = () => {
        dispatch(setCurrentOrder(order))
        dispatch(modalOpen('order-info'));
    };


    if (allOrders) {
        return (
            <section className={styles.feed}>
                <ul className={styles.orders}>
                    {allOrders.orders.map((order: IOrder) => (
                        <Link
                            style={{ textDecoration: 'none' }}
                            state={{ background: location }}
                            to={`${order._id}`}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
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

// function order(order: any): { payload: any; type: "feed/setCurrentOrder"; } {
//     throw new Error('Function not implemented.');
// }

