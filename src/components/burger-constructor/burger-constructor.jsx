import styles from './burger-constructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';

import { addIngredient } from '../../services/reducers/burgerConstructorReducer';
import { getOrderData } from '../../services/reducers/orderReducer';

import { SelectModalType } from '../../services/selectors/modalSelector';
import { selectOrderIsLoading, selectOrderIsError, selectOrderSuccess } from '../../services/selectors/orderSelector';
import { modalOpen, modalClose } from '../../services/reducers/modalReducer';
import { deleteAllIngredients } from '../../services/reducers/burgerConstructorReducer';
import { selectPrice, selectAllId, selectBurgerBun } from '../../services/selectors/burgerConstructorSelector';

import BurgerCreating from '../burger-creating/burger-creating';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';



function BurgerConstructor() {

    const dispatch = useDispatch();

    const price = useSelector(selectPrice);
    const ingredientsAllId = useSelector(selectAllId);
    const bun = useSelector(selectBurgerBun);

    const orderSuccess = useSelector(selectOrderSuccess);
    const orderError = useSelector(selectOrderIsError);
    const orderIsLoading = useSelector(selectOrderIsLoading);

    const modalType = useSelector(SelectModalType);

    const makeTheOrder = () => {
        dispatch(getOrderData({ ingredients: ingredientsAllId }));
        dispatch(modalOpen('orderDetails'));
        dispatch(deleteAllIngredients());
    };

    const [{ isHover }, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(ingredient) {
            const newIngredient = { ...ingredient, _customId: uuidv4() };
            dispatch(addIngredient(newIngredient));
        },
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
    });



    return (
        <section className={styles.burger_constructor}
            ref={dropTarget}>

            <div className={` ${styles.burger_wrapper} ${isHover ? styles.container_empty : ""
                } `}>
                <BurgerCreating />
            </div>
            <span className={styles.burger_sum}>
                <p className={`${styles.currency} text text_type_digits-medium mr-10`}>
                    {price}
                    <CurrencyIcon type="primary" extraClass={styles.currency} />
                </p>
                <Button
                    disabled={!bun}
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={makeTheOrder}
                >
                    Оформить заказ
                </Button>
                {makeTheOrder && modalType === "orderDetails" && (
                    <Modal onClose={() => dispatch(modalClose())}>
                        {orderIsLoading ? (
                            <span className="text text_type_main-medium mt-8 mb-8">Загрузка...</span>
                        ) : orderError ? (
                            <span className="text text_type_main-medium mt-8 mb-8">Произошла ошибка</span>
                        ) : orderSuccess && <OrderDetails />}
                    </Modal>
                )}

            </span>

        </section >
    );
};

export default BurgerConstructor;
