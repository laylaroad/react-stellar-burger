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


import OrderInfo from '../order-info/order-info';

import Modal from '../modal/modal';
import { modalClose, modalOpen } from '../../services/reducers/modalReducer';
import { SelectModalType } from '../../services/selectors/modalSelector';
import { selectIngredientsIsLoading, selectIngredientsError } from '../../services/selectors/ingredientsSelector';
import { useLocation } from "react-router";
import { setCurrentOrder } from "../../services/reducers/ordersFeedReducer";

import { Ingredient } from '../../types/ingredient-types';

interface OrderProps {
  order: any;
}

const Order: FC<OrderProps> = ({ order }) => {
  // const orderDate = new Date(order.time);
  const orderId = uuidv4();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const modalType = useAppSelector(SelectModalType);
  const ingredientDetailsIsLoading = useAppSelector(selectIngredientsIsLoading);
  const ingredientDetailsIsError = useAppSelector(selectIngredientsError);


  const orderDetails = order;
  const ingredientsArray = useSelector(selectIngredients);
  const orderIngredientsIds = orderDetails.ingredients.slice(0, 6);
  const orderIngredients = orderIngredientsIds.map((ingredientId: string) => {
    return ingredientsArray.find((ingredient: Ingredient) => ingredient._id === ingredientId);
  })

  console.log(orderIngredients);


  const modalOrderInfo = () => {
    dispatch(setCurrentOrder(order))
    dispatch(modalOpen('order-info'));
  };

  return (
    <>
      <ul className={styles.order_list}>
        <Link
          style={{ textDecoration: 'none' }}
          state={{ background: location }}
          to={`${orderDetails._id}`}
          onClick={(e: any) => {
            modalOrderInfo();
          }}
          key={orderDetails._id}
        >
          <li key={orderId} className={styles.card_order}>

            <div className={styles.card_header}>
              <p className="text text_type_main-default">
                #{orderDetails.number}
              </p>
              <FormattedDate
                date={new Date(orderDetails.createdAt)}
                className="text text_type_main-default text_color_inactive"
              />
            </div>
            <p className={`${styles.order_name} text text_type_main-medium`}>{order.name}</p>
            {/* <p className={`${styles.status} text text_type_main-default`}>{props.status}</p> */}
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

                {/* {ingredients.length > 6 && (
                    <div className={styles.darkened_image}>
                      <p className={styles.counter}>
                        + {ingredients.length - 6}
                      </p>
                    </div>
                  )} */}
              </div>
            </div>
          </li>
        </Link>
      </ul>

      {modalType === 'order-info' && (
        <Modal title={''} onClose={() => dispatch(modalClose())}>
          {ingredientDetailsIsLoading ? (
            <span className="text text_type_main-medium mt-8 mb-8">Загрузка...</span>
          ) : ingredientDetailsIsError ? (
            <span className="text text_type_main-medium mt-8 mb-8">Ошибка</span>
          ) : (
            <OrderInfo status={true} isModal={true} />
          )}
        </Modal>
      )}
    </>
  );
}

export default Order;
