import styles from "./order.module.css";
import { FC, Key } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuidv4 } from "uuid";
import { selectIngredients } from "../../services/selectors/ingredientsSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/react-redux";

import { modalOpen } from '../../services/reducers/modalReducer';
import { SelectModalType } from '../../services/selectors/modalSelector';
import { useLocation } from "react-router";
import { setCurrentOrder } from "../../services/reducers/ordersFeedReducer";

import { Ingredient } from '../../types/ingredient-types';

interface OrderProps {
  order: any;
  showOrderStatus?: boolean;
  status?: string;
}

const Order: FC<OrderProps> = ({ order, showOrderStatus, status }) => {
  const orderId = uuidv4();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const modalType = useAppSelector(SelectModalType);
  console.log('modaltype', modalType);

  const ingredientsArray = useSelector(selectIngredients);
  const orderIngredientsIds = order.ingredients.slice(0, 6);
  const orderIngredients = orderIngredientsIds.map((ingredientId: string) => {
    return ingredientsArray.find((ingredient: Ingredient) => ingredient._id === ingredientId);
  })

  const modalOrderInfo = () => {
    dispatch(setCurrentOrder(order))
    dispatch(modalOpen('order-info'));
  };

  console.log(status);

  const statusText =
    status === 'done' ? 'Выполнен' :
      status === 'pending' ? 'Готовится' :
        'Отменен';


  return (
    <>
      <ul className={styles.order_list}>
        <Link
          style={{ textDecoration: 'none' }}
          state={{ background: location }}
          to={`${order._id}`}
          onClick={(e: any) => {
            modalOrderInfo();
          }}
          key={order._id}
        >
          <li key={orderId} className={styles.card_order}>
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
                {orderIngredients.map((ingredient: any, index: Key | null | undefined) => (
                  <div key={index} className={styles[`image_${index}`]}>
                    <img
                      className={styles.image}
                      src={ingredient?.image}
                      alt={ingredient?.name}
                    />
                  </div>
                ))}

                <span
                  className={`${styles.order_sum} text text_type_digits-default`}
                >
                  {
                    orderIngredients.reduce((totalPrice: number, ingredient: any) => {
                      const ingredientCount = ingredient.type === 'bun' ? 2 : 1;
                      return totalPrice + ingredient.price * ingredientCount;
                    }, 0)
                  }
                  <CurrencyIcon type="primary" />
                </span>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default Order;
