import styles from './feed-page.module.css';

import { useLocation } from 'react-router-dom'
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { Link } from 'react-router-dom';

import Order from '../../components/order/order';
import OrderSummary from '../../components/order-summary/order-summary';

import { IOrder } from '../../types/order-types';
import { setCurrentOrder } from "../../services/reducers/ordersFeedReducer";
import { modalOpen } from '../../services/reducers/modalReducer';
import { selectAllOrders } from '../../services/selectors/feedSelector';

import { wsConnect, wsDisconnect } from '../../services/reducers/wsActions';
import { allOrdersWsApiPath } from '../../utils/api';

interface IFeedPageProps {
  order?: IOrder | null;
}

const FeedPage: FC<IFeedPageProps> = ({ order }) => {

  const dispatch = useAppDispatch();
  const location = useLocation();

  const allOrders = useAppSelector(selectAllOrders);

  useEffect(() => {
    dispatch(wsConnect(allOrdersWsApiPath));
    return () => {
      dispatch(wsDisconnect(allOrdersWsApiPath));
    };
  }, [location.pathname]);



  const modalOrderInfo = () => {
    dispatch(setCurrentOrder(order))
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
                  <Order key={order._id} order={order} />
                </li>
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
