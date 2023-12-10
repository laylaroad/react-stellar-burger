import { useLocation } from 'react-router-dom'
import { FC, useEffect } from 'react';
import styles from './feed-page.module.css';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../hooks/react-redux';

//feed-components
import OrderList from '../../components/order-list/order-list';
import OrderSummary from '../../components/order-summary/order-summary';

import { wsConnect } from '../../services/reducers/wsActions';

//websocket
// import {wsConnecting, wsClose} from '../../services/reducers/ordersFeedReducer';
import { wssUrl } from '../../utils/api';

const FeedPage: FC = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   console.log('Connecting to WebSocket...');

  //   dispatch(wsConnecting(`${wssUrl}/orders/all`));

  //   return () => {
  //     console.log('Closing WebSocket connection...');
  //     dispatch(wsClose());
  //   };
  // }, [location.pathname]);

  useEffect(() => {
    console.log('Connecting to WebSocket...');
    dispatch(wsConnect('wss://norma.nomoreparties.space/orders/all'));
  })

  return (
    <>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Лента заказов
      </h1>
      <section className={styles.feed}>
        <div className={styles.order_column}>
          <OrderList time="Сегодня, 16:20 i-GMT+3" status="Выполнен" price={480} name="Death Star Starship Main бургер" number={123} />
        </div>
        <div className={styles.summary_column}>
          <OrderSummary />
        </div>
      </section>
    </>
  )
};

export default FeedPage;
