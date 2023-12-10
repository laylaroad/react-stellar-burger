import styles from "./order-list.module.css";
import { FC } from "react";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuidv4 } from "uuid";
import { selectIngredients } from "../../services/selectors/ingredientsSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/react-redux";
// import { selectOrders } from '../../services/selectors/orderSelector';
import { Link } from 'react-router-dom';
import ingredientsReducer from "../../services/reducers/ingredientsReducer";


interface IOrderListProps {
  time: string;
  price: number;
  name: string;
  number: number;
  status: string;
}

const OrderList: FC<IOrderListProps> = (props) => {
  const orderDate = new Date(props.time);
  const orderId = uuidv4();
  const ingredients = useAppSelector(selectIngredients);
  // const getOrdersFromServer = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();


  // const orderIngredients = ingredients.map((ingredient: any) => {
  //   const filterIngredients = ingredients.find(
  //     (item) => item._id === ingredient
  //   );
  //   return filterIngredients;
  // });

  // Имитируем успешный запрос
  const orderResponse = {
    success: true,
    orders: [
      {
        ingredients: [
          "60d3463f7034a000269f45e7",
          "60d3463f7034a000269f45e9",
          "60d3463f7034a000269f45e8",
          "60d3463f7034a000269f45ea",
          "60d3463f7034a000269f45ea",
          "60d3463f7034a000269f45ea",
          "60d3463f7034a000269f45ea",
          "60d3463f7034a000269f45ea",
        ],
        _id: "",
        status: "done",
        number: 100,
        createdAt: "2021-06-23T14:43:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z",
      },
    ],
    total: 1,
    totalToday: 1,
  };
  // Если заказ успешный, то
  if (orderResponse.success) {
    const orderDetails = orderResponse.orders[0];
    const orderIngredients = ingredients.slice(0, 6); // Limit to 6 ingredients

    return (
     <>
        <ul className={styles.order_list}>
        
        <Link to={`/order-info`}>
        <li key={orderId} className={styles.card_order}>
            {/* // to={`/orders/${orderDetails.number}`}> */}
              <div className={styles.card_header}>
                <p className="text text_type_main-default">
                  #{orderDetails.number}
                </p>
                <FormattedDate
                  date={new Date(orderDetails.createdAt)}
                  className="text text_type_main-default text_color_inactive"
                />
              </div>
<p className={`${styles.order_name} text text_type_main-medium`}>{props.name}</p>
<p className={`${styles.status} text text_type_main-default`}>{props.status}</p>
              <div className={styles.card_footer}>
                <div className={styles.images}>
                  {orderIngredients.map((ingredient, index) => (
                    <div key={index} className={styles[`image_${index}`]}>
                      <img
                        className={styles.image}
                        src={ingredient?.image}
                        alt={ingredient?.name}
                      />
                    </div>
                  ))}

                  {ingredients.length > 6 && (
                    <div className={styles.darkened_image}>
                      <p className={styles.counter}>
                        +{ingredients.length - 6}
                      </p>
                    </div>
                  )}
                </div>

                <span
                  className={`${styles.order_sum} text text_type_digits-default`}
                >
                  {props.price}
                  <CurrencyIcon type="primary" />
                </span>
              </div>
              </li>
            </Link>
        

            <Link to={`/orders/${orderDetails.number}`}>
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
              <p className={`${styles.status} text text_type_main-default`}>{props.status}</p>
              <p className={`${styles.order_name} text text_type_main-medium`}>{props.name}</p>
              <div className={styles.card_footer}>
                <div className={styles.images}>
                  {orderIngredients.map((ingredient, index) => (
                    <div key={index} className={styles[`image_${index}`]}>
                      <img
                        className={styles.image}
                        src={ingredient?.image}
                        alt={ingredient?.name}
                      />
                    </div>
                  ))}

                  {ingredients.length > 6 && (
                    <div className={styles.darkened_image}>
                      <p className={styles.counter}>
                        +{ingredients.length - 6}
                      </p>
                    </div>
                  )}
                </div>

                <span
                  className={`${styles.order_sum} text text_type_digits-default`}
                >
                  {props.price}
                  <CurrencyIcon type="primary" />
                </span>
              </div>
          </li>
          </Link>

        </ul>
</>
    );
  } else {
    // Если запрос заказа не успешен
    return (
      <p className="text text_type_digits-default">Что-то пошло не так...</p>
    );
  }
};

export default OrderList;
