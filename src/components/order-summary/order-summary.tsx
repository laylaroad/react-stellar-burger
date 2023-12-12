import styles from './order-summary.module.css';
import { FC } from 'react'
import { useAppSelector } from '../../hooks/react-redux';
import { selectAllOrders } from '../../services/selectors/feedSelector';

import { IOrder } from '../../types/order-types';

const OrderSummary: FC = () => {

    const allOrders = useAppSelector(selectAllOrders);

    const getReadyNumbers = allOrders?.orders.filter((item: IOrder) => item.status === 'done')
    const getInProcessNumbers = allOrders?.orders.filter((item: IOrder) => item.status === 'pending')

    return (
        <section className={styles.order_summary}>
            <div className={styles.orders_board}>
                <div className={styles.orders_column}>
                    <h4 className="text text_type_main-medium">Готовы:</h4>

                    <ul className={`${styles.orders_done_list} text_type_digits-default`}>
                        {getReadyNumbers?.map((item: IOrder) => (
                            <li key={item._id}
                                className={styles.numbers_style}>
                                {item.number}

                            </li>
                        ))}
                    </ul>

                </div>
                <div className={styles.orders_column}>
                    <h4 className="text text_type_main-medium">В работе:</h4>
                    <ul className="text_type_digits-default">
                        {getInProcessNumbers?.map((item: IOrder) => (
                            <li key={item._id}
                                className={styles.order_in_process_numbers}> {item.number}</li>
                        ))}
                    </ul>

                </div>
            </div>

            <div className={styles.total}>
                <h3 className="text text_type_main-medium">Выполнено за все время</h3>
                <p className={`${styles.numbers} text text_type_digits-large`}>{allOrders.total}</p>
                <h3 className="text text_type_main-medium">Выполнено за сегодня</h3>
                <p className={`${styles.numbers} text text_type_digits-large`}>{allOrders.totalToday}</p>
            </div>
        </section>
    )
}


export default OrderSummary;
