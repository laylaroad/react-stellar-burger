import styles from './orders.module.css';


function Orders() {
    return (
        <div className={styles.orders}>
            <h1 className={`text text_type_main-large ${styles.orders_title}`}>История заказов</h1>
            <p className=" text text_type_main-medium">Здесь пока ничего нет</p>
        </div>
    )
}

export default Orders;
