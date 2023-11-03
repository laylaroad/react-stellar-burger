import styles from './burger-constructor.module.css';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { DropTarget } from 'react-dnd';
import { addIngredient } from '../../services/reducers/burgerConstructorReducer';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// // import Modal from '../modal/Modal';
// // import useModal from '../../hooks/useModal';
// // import OrderDetails from '../order-details/Order-Details';
// import Burger from '../burger/Burger';


function BurgerConstructor() {
  const dispatch = useDispatch();


  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      const idEl = { ...item, _customId: uuidv4() };
      dispatch(addIngredient(idEl));
    },
  });


  return (
    <section className={styles.burger_constructor} ref={DropTarget}>
      <div className={styles.constructor_empty}></div>
      <span className={styles.burger_sum}>
        <p className="text text_type_digits-medium mr-10">
          610
          <CurrencyIcon type="primary" extraClass={styles.currency} />
        </p>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </span>

    </section>
  );
}

export default BurgerConstructor;


























// // onClick = { openModal }




{/* {isModalOpen && (
        <Modal onClose={useModal}>
          <OrderDetails />
        </Modal>
      )} */}

// // const allIngredients = [...ingredients, bun];
// // const modalIsOpen = () => {
// //     dispatch(getOrderData({ ingredients: allIngredients.map((item) => item._id) }));
// //     !isError && dispatch(deleteAllIngredients());
// //     dispatch(openModal('order'));
// // };
// // const isError = useSelector(selectOrderIsError);

