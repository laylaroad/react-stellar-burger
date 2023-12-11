import { useLocation } from 'react-router-dom'
import { FC, useEffect } from 'react';
import styles from './feed-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/react-redux';

//feed-components
import OrderList from '../../components/order-list/order-list';
import OrderSummary from '../../components/order-summary/order-summary';
import { IOrder } from '../../types/order-types';

import { wsConnect } from '../../services/reducers/wsActions';
// import { selectAllOrders } from '../../services/selectors/feedSelector';


//websocket
// import {wsConnecting, wsClose} from '../../services/reducers/ordersFeedReducer';
import { wssUrl } from '../../utils/api';

const FeedPage: FC = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const selectAllOrders = (store: any) => store.feedApi.allOrders;

  const allOrders = useSelector(selectAllOrders);
  console.log(allOrders);

  useEffect(() => {
    console.log('Connecting to WebSocket...');
    dispatch(wsConnect('wss://norma.nomoreparties.space/orders/all'));
  })
  if (allOrders) {
    return (
      <>
        <h1 className={`${styles.title} text text_type_main-large`}>
          Лента заказов
        </h1>
        <section className={styles.feed}>
          <ul className={styles.order_column}>
            {allOrders.orders.map((order: IOrder) => (
              <li>
                <OrderList key={order._id} order={order} />
              </li>
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
function RootStore(RootStore: any): null {
  throw new Error('Function not implemented.');
}

