import styles from './order-details.module.css';
import done from '../../images/done.svg';
import {FC} from 'react';
import { useSelector } from 'react-redux';
import { selectOrderNumber } from '../../services/selectors/orderSelector';

const OrderDetails: FC = () => {
    const orderNumber = useSelector(selectOrderNumber) as number;

    return (
        <section className={styles.order_section}>
            <span className={`${styles.order_number} text text_type_digits-large mt-4 mb-8`}>
                {orderNumber}
            </span>
            <p className="text text_type_main-medium">
                идентификатор заказа
            </p>
            <img className={styles.order_image} src={done} alt="Done">
            </img>
            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
        </section>
    )
}

export default OrderDetails;
