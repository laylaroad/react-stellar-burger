import styles from "./order.module.css";
import { FC, Key } from "react";
import { useSelector } from 'react-redux';
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuidv4 } from "uuid";
import { selectIngredients } from "../../services/selectors/ingredientsSelector";
import { Ingredient } from '../../types/ingredient-types';
import { IOrder } from "../../types/order-types";

interface IOrderProps {
  order: IOrder;
  showOrderStatus?: boolean;
  status?: string;
}

const Order: FC<IOrderProps> = ({ order, showOrderStatus, status }) => {
  const orderId = uuidv4();

  const ingredientsArray = useSelector(selectIngredients);
  const orderIngredientsIds = order.ingredients.slice(0, 6);
  const orderIngredients = orderIngredientsIds.map((ingredientId: string) => {
    return ingredientsArray.find((ingredient: Ingredient) => ingredient._id === ingredientId);
  })


  const statusText =
    status === 'created' ? 'Создан' :
      status === 'done' ? 'Выполнен' :
        status === 'pending' ? 'Готовится' :
          'Отменен';


  return (
    <>
      <ul className={styles.order_list}>
        <li className={styles.card_order}>
          <div className={styles.card_header}>
            <p className="text text_type_digits-default">
              #{order.number}
            </p>
            <FormattedDate
              date={new Date(order.createdAt)}
              className="text text_type_main-default text_color_inactive"
            />
          </div>
          <p className={`${styles.order_name} text text_type_main-medium`}>{order.name}</p>
          {showOrderStatus &&
            <p className={`${styles.status} text text_type_main-default`}>{statusText}</p>}
          <div className={styles.card_footer}>
            <div className={styles.images}>
              {orderIngredients.map((ingredient: Ingredient | undefined, index: Key | undefined) => (
                <div key={index} className={styles[`image_${index}`]}>
                  <img
                    className={styles.image}
                    src={ingredient?.image}
                    alt={ingredient?.name}
                  />
                </div>
              ))}

              <span className={`${styles.order_sum} text text_type_digits-default`}>
                {orderIngredients.reduce(
                  (totalPrice: number, ingredient: Ingredient | undefined) => {
                    const ingredientCount = ingredient?.type === 'bun' ? 2 : 1;
                    const ingredientPrice = ingredient?.price ?? 0;
                    return totalPrice + ingredientPrice * ingredientCount;
                  },
                  0
                )}
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
        </li>

      </ul>
    </>
  );
}

export default Order;
