
import styles from './order-list.module.css';
import { FC } from 'react';
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import uuid from "react-uuid";

interface IOrderList {
  time: string;
  price: number;
  name: string;
  number: number;
}

const OrderList: FC<IOrderList> = ({ time, price, name, number }) => {
  const orderDate = new Date(time);

  // здесь будет логика обработки процесса заказа

  return (
    <li className={styles.card_order}>
      <span>
        <FormattedDate date={orderDate} />
      </span>
      <div className={styles.card_info}>
        <p className="text text_type_main-default">
          Order #{number}
        </p>
        <p className="text text_type_main-medium">
          {name}
        </p>
        <p className={`${styles.order_sum} text text_type_digits-default`}>
          {price}
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </li>
  );
}

export default OrderList;
