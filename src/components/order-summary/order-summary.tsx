import styles from './order-summary.module.css';
import { FC } from 'react';
// import { selectOrders, selectTotal, selectTotalToday } from '../../services/selectors/ordersFeedSelector';
import { useAppSelector } from '../../hooks/react-redux';

const OrderSummary: FC = () => {

    // const orders = useAppSelector(selectOrders);
    // const total = useAppSelector(selectTotal);
    // console.log('Заказов за все время:', total);
    // const totalToday = useAppSelector(selectTotalToday);
    // console.log('Заказов за сегодня:', totalToday);




    return (
        <section className={styles.order_summary}>
            <div className={styles.numbers}>
                <div className={styles.orders_ready}>
                    <h4 className="text text_type_main-medium">Готовы:</h4>
                    <ul className={`${styles.order_ready_numbers} text_type_digits-default`}>
                        <li className={styles.order_ready_numbers}>28620</li>
                        <li className={styles.order_ready_numbers}>28619</li>
                        <li className={styles.order_ready_numbers}>28618</li>
                        <li className={styles.order_ready_numbers}>28617</li>
                        <li className={styles.order_ready_numbers}>28620</li>
                        <li className={styles.order_ready_numbers}>28619</li>
                        <li className={styles.order_ready_numbers}>28618</li>
                        <li className={styles.order_ready_numbers}>28617</li>
                    </ul>
                </div>
                <div className={styles.in_process}>
                    <h4 className="text text_type_main-medium">В работе:</h4>
                    <ul className="text_type_digits-default">
                        <li className={styles.order_in_process_numbers}>28620</li>
                        <li className={styles.order_in_process_numbers}>28619</li>
                        <li className={styles.order_in_process_numbers}>28618</li>
                        <li className={styles.order_in_process_numbers}>28617</li>
                    </ul>
                </div>
            </div>

            <div className={styles.orders_done}>
                <h3 className="text text_type_main-medium">Выполнено за все время</h3>
                <p className={`${styles.numbers} text text_type_digits-large`}>100</p>
                <h3 className="text text_type_main-medium">Выполнено за сегодня</h3>
                <p className={`${styles.numbers} text text_type_digits-large`}>100</p>
            </div>
        </section>
    )
}


export default OrderSummary;
