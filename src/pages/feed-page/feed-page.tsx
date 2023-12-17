import styles from './feed-page.module.css';

import { useLocation } from 'react-router-dom'
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { Link } from 'react-router-dom';

import Order from '../../components/order/order';
import OrderSummary from '../../components/order-summary/order-summary';

import { IOrder } from '../../types/order-types';
import { modalOpen } from '../../services/reducers/modalReducer';
import { selectAllOrders } from '../../services/selectors/feedSelector';

import { wsConnect, wsDisconnect } from '../../services/actions/wsActions';
import { allOrdersWsApiPath, getApiUrl } from '../../utils/api';


const FeedPage: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const allOrders = useAppSelector(selectAllOrders);

  useEffect(() => {
    let apiUrl = getApiUrl(allOrdersWsApiPath);

    dispatch(wsConnect(apiUrl));
    return () => {
      dispatch(wsDisconnect(apiUrl));
    };
  }, [location.pathname]);

  const modalOrderInfo = () => {
    dispatch(modalOpen('order-info'));
  };

  if (allOrders) {
    return (
      <>
        <h1 className={`${styles.title} text text_type_main-large`}>
          Лента заказов
        </h1>
        <section className={styles.feed}>
          <ul className={styles.order_column}>
            {allOrders.orders.map((order) => (
              <Link
                className={styles.link}
                state={{ background: location }}
                to={`${order._id}`}
                onClick={(e) => {
                  modalOrderInfo();
                }}
                key={order._id}
              >
                <Order key={order._id} order={order} />
              </Link>
            ))}
          </ul>
          <div className={styles.summary_column}>
            <OrderSummary />
          </div>
        </section>
      </>
    );
  } else {
    return <>loading</>;
  }
}

export default FeedPage;
