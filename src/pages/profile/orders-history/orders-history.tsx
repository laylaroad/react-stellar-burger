import styles from './orders-history.module.css';
import { FC, useEffect } from 'react';
import OrderList from '../../../components/order-list/order-list';
import { wssUrl } from '../../../utils/api';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
// import { wsConnecting, wsClose } from '../../../services/reducers/ordersFeedReducer';
import { useLocation } from 'react-router';
// import { selectOrders } from '../../../services/selectors/ordersFeedSelector';


const OrdersHistory: FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const accessToken = localStorage.getItem("accessToken")?.split("Bearer ")[1];

    // useEffect(() => {
    //     dispatch(
    //         wsConnecting(`${wssUrl}/orders?token=${accessToken}`)
    //     );
    //     return () => {
    //         dispatch(wsClose());
    //     };
    // }, [location.pathname, accessToken]);

    // const orders = useAppSelector(selectOrders);

    return (
        <div className={styles.orders}>
            {/* orders.map(el) = { */}
            {/* <OrderList order={} /> */}


        </div>
    )
}

export default OrdersHistory;
