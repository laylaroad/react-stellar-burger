import styles from './order-summary.module.css';
import { FC } from 'react'
import { useAppSelector } from '../../hooks/react-redux';

const OrderSummary: FC = () => {

    const selectAllOrders = (store: any) => store.feedApi.allOrders;

    const allOrders = useAppSelector(selectAllOrders);


    // const getReadyNumbers = allOrders?.orders.filter((el: any) => el.status === 'done')

    // const getInProcessNumbers = allOrders?.orders.filter((el: any) => el.status === 'pending')

    return (
        <section className={styles.order_summary}>
            <div className={styles.numbers}>
                <div className={styles.orders_ready}>
                    <h4 className="text text_type_main-medium">Готовы:</h4>
                    <ul className={`${styles.order_ready_numbers} text_type_digits-default`}>
                        <li className={styles.order_ready_numbers}>100</li>

                    </ul>
                </div>
                <div className={styles.in_process}>
                    <h4 className="text text_type_main-medium">В работе:</h4>
                    <ul className="text_type_digits-default">
                        <li className={styles.order_in_process_numbers}>100</li>

                    </ul>
                </div>
            </div>

            <div className={styles.orders_done}>
                <h3 className="text text_type_main-medium">Выполнено за все время</h3>
                <p className={`${styles.numbers} text text_type_digits-large`}>{allOrders.total}</p>
                <h3 className="text text_type_main-medium">Выполнено за сегодня</h3>
                <p className={`${styles.numbers} text text_type_digits-large`}>{allOrders.totalToday}</p>
            </div>
        </section>
    )
}


export default OrderSummary;
