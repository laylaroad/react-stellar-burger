import styles from './order-info.module.css';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectIngredients } from '../../services/selectors/ingredientsSelector';
import { useAppSelector } from '../../hooks/react-redux';

import { useAppDispatch } from '../../hooks/react-redux';
import { wsConnect } from '../../services/reducers/wsActions';
import { Ingredient } from '../../types/ingredient-types';

interface OrderInfoProps {
    status: boolean;
    isModal: boolean;

}

const OrderInfo: FC<OrderInfoProps> = ({ status, isModal }) => {
    const { id } = useParams();
    console.log(id);
    const ingredients = useAppSelector(selectIngredients);
    const dispatch = useAppDispatch();

    const selectAllOrders = (store: any) => store.feedApi.allOrders;

    const allOrders = useAppSelector(selectAllOrders);
    console.log(allOrders);

    useEffect(() => {
        console.log('Connecting to WebSocket...');
        dispatch(wsConnect('wss://norma.nomoreparties.space/orders/all'));
    })

    const ingredientsArray = useAppSelector(selectIngredients);

    if (allOrders) {
        const currentOrder = allOrders.orders.find((order: any) => { return order._id === id });
        // console.log(currentOrder);

        const orderIngredients = currentOrder.ingredients.map((ingredientId: string) => {
            return ingredientsArray.find((ingredient: any) => ingredient._id === ingredientId);
        })

        const numberStyles = isModal ? styles.modal_number : styles.number;
        const orderStyles = isModal ? styles.modal_window : styles.order_window;

        const createdAtDate = currentOrder.createdAt ? new Date(currentOrder.createdAt) : null;
        return (
            <section className={orderStyles}>
                <span className={`${numberStyles} text text_type_digits-default`}>#{currentOrder.number}</span>
                <p className={`${styles.order_name} text text_type_main-medium`}>
                    {currentOrder.name}
                </p>
                <p className={`${styles.order_status} text text_type_main-default`}> {`${currentOrder.status === "done" ? "Выполнен" : "Готовится"}`}</p>
                <h2 className={`${styles.composition} text text_type_main-medium`}>Состав:</h2>
                <ul className={styles.order_composition}>
                    {orderIngredients.map((ingredient: any, index: any | null | undefined) => (
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
                        {
                            orderIngredients.reduce((totalPrice: number, ingredient: any) => {
                                const ingredientCount = ingredient.type === 'bun' ? 2 : 1;
                                return totalPrice + ingredient.price * ingredientCount;
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
