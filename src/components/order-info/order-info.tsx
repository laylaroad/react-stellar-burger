import styles from './order-info.module.css';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectIngredients } from '../../services/selectors/ingredientsSelector';
import { useAppSelector } from '../../hooks/react-redux';
import { selectCurrentOrder } from '../../services/selectors/ordersFeedSelector';
import { IOrder } from '../../types/order-types';

interface OrderInfoProps {
    status: boolean;
    isModal: boolean;

}

const OrderInfo: FC<OrderInfoProps> = ({ status, isModal }) => {
    const { id } = useParams();
    const ingredients = useAppSelector(selectIngredients);
    const orderData = useAppSelector(selectCurrentOrder) as IOrder | null;

    const numberStyles = isModal ? styles.modal_number : styles.number;
    const orderStyles = isModal ? styles.modal_window : styles.order_window;

    // const createdAtDate = orderData?.createdAt ? new Date(orderData.createdAt) : null;
    const createdAtDate = new Date("2021-06-23T14:43:22.587Z");

    return (
        <section className={orderStyles}>
            <span className={`${numberStyles} text text_type_digits-default`}>#2788{orderData?.number}</span>
            <p className={`${styles.order_name} text text_type_main-medium`}>
                {orderData?.name} Антарианский краторный space бургер
            </p>
            <p className={`${styles.order_status} text text_type_main-default`}>{status} Выполнен</p>
            <h2 className={`${styles.composition} text text_type_main-medium`}>Состав:</h2>
            <ul className={styles.order_composition}>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <div className={styles.order_li}>
                            <div className={styles.div_image}>
                                <img className={styles.image} src={ingredient?.image} alt={ingredient?.name} />
                            </div>
                            <p className={`${styles.ingredient_name} text text_type_main-default`}>{ingredient.name}</p>
                            <p className={`${styles.price} text text_type_main-default`}>
                                {ingredient.type === 'bun' ? 2 : 1} x {ingredient.price}
                                <CurrencyIcon type="primary" />
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.order_footer}>
                {createdAtDate !== null && (
                    <FormattedDate
                        date={createdAtDate}
                        className={`${styles.time} text text_type_main-default text_color_inactive`}
                    />
                )}
                <span className={`${styles.order_sum} text text_type_digits-default`}>
                    {orderData?.price} 560
                    <CurrencyIcon type="primary" />
                </span>
            </div>
        </section>
    );
};

export default OrderInfo;
