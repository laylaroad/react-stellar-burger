import styles from './order-info.module.css';
import { FC, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectIngredients } from '../../services/selectors/ingredientsSelector';
import { useAppSelector } from '../../hooks/react-redux';

import { useAppDispatch } from '../../hooks/react-redux';
import { wsConnect, wsClose } from '../../services/actions/wsActions';
import { Ingredient } from '../../types/ingredient-types';
import { IOrder } from '../../types/order-types';

import { selectAllOrders } from '../../services/selectors/feedSelector';

import { getApiUrl } from '../../utils/api';

interface OrderInfoProps {
    status: boolean;
    isModal: boolean;
    wsApiPath: string;
}

const OrderInfo: FC<OrderInfoProps> = ({ status, isModal, wsApiPath }) => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const ingredientsArray = useAppSelector(selectIngredients);
    const allOrders = useAppSelector(selectAllOrders);
    console.log('all orders:', allOrders);

    useEffect(() => {
        console.log('Connecting to WebSocket...');
        !isModal && dispatch(wsConnect(getApiUrl(wsApiPath)));
    })

    if (id && allOrders) {
        const currentOrder = allOrders.orders.find((order) => { return order._id === id });

        const ingredientIdsWithCount = currentOrder?.ingredients.map((ingredientId, index, array) => {
            const count = array.filter((el) => el === ingredientId).length;

            return { id: ingredientId, count: count }
        })

        const uniqueIngredientIds = currentOrder?.ingredients.filter(
            (id, index, allIngredients) => allIngredients.indexOf(id) === index
        )

        const uniqueIngredientIdsWithCount = uniqueIngredientIds?.map(
            (id) => ingredientIdsWithCount?.find((value) => value.id === id))

        const orderIngredients = uniqueIngredientIdsWithCount?.map((element) => {
            const ingredient = ingredientsArray.find((ingredient) => ingredient._id === element?.id);

            return { ...ingredient, count: element?.count }
        })

        const numberStyles = isModal ? styles.modal_number : styles.number;
        const orderStyles = isModal ? styles.modal_window : styles.order_window;

        const createdAtDate = currentOrder?.createdAt ? new Date(currentOrder?.createdAt) : null;
        return (
            <section className={orderStyles}>
                <span className={`${numberStyles} text text_type_digits-default`}>#{currentOrder?.number}</span>
                <p className={`${styles.order_name} text text_type_main-medium`}>
                    {currentOrder?.name}
                </p>
                <p className={`${styles.order_status} text text_type_main-default`}> {`${currentOrder?.status === "done" ? "Выполнен" : "Готовится"}`}</p>
                <h2 className={`${styles.composition} text text_type_main-medium`}>Состав:</h2>
                <ul className={styles.order_composition}>
                    {orderIngredients?.map((ingredient, index) => (
                        <li key={index}>
                            <div className={styles.order_li}>
                                <div className={styles.div_image}>
                                    <img className={styles.image} src={ingredient?.image} alt={ingredient?.name} />
                                </div>
                                <p className={`${styles.ingredient_name} text text_type_main-default`}>{ingredient?.name}</p>
                                <p className={`${styles.price} text text_type_main-default`}>
                                    {ingredient?.count} x {ingredient?.price}

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
                        {
                            orderIngredients?.reduce((totalPrice, ingredient) => {
                                const ingredientCount = ingredient?.type === 'bun' ? 2 : ingredient.count || 1;
                                const price = ingredient?.price || 0;
                                return totalPrice + price * ingredientCount;
                            }, 0)
                        }
                        <CurrencyIcon type="primary" />
                    </span>
                </div>
            </section>
        );
    } else {
        return null;
    }
};

export default OrderInfo;
