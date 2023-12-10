import styles from './burger-constructor.module.css';
import { FC } from 'react';

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';

import { addIngredient } from '../../services/reducers/burgerConstructorReducer';
import { postOrderData } from '../../services/reducers/orderReducer';

import { SelectModalType, SelectModalOpen } from '../../services/selectors/modalSelector';
import { selectOrderIsLoading, selectOrderIsError, selectOrderSuccess } from '../../services/selectors/orderSelector';
import { modalOpen, modalClose } from '../../services/reducers/modalReducer';
import { deleteAllIngredients } from '../../services/reducers/burgerConstructorReducer';
import { selectPrice, selectAllId, selectBurgerBun } from '../../services/selectors/burgerConstructorSelector';

import BurgerCreating from '../burger-creating/burger-creating';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';

import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../services/selectors/userSelector';

import {Ingredient, IngredientId} from '../../types/ingredient-types';

  
const BurgerConstructor: FC = () => {{

    const dispatch = useDispatch();

    const price = useSelector(selectPrice) as number;
    const ingredientsAllId = useSelector(selectAllId) as unknown as IngredientId[]; //вернуться позже
    const bun = useSelector(selectBurgerBun) as IngredientId;

    const orderSuccess = useSelector(selectOrderSuccess) as boolean;
    const orderError = useSelector(selectOrderIsError) as boolean;
    const orderIsLoading = useSelector(selectOrderIsLoading) as boolean;

    const modalType = useSelector(SelectModalType);

    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const isModalOpen = useSelector(SelectModalOpen);

    const makeTheOrder: () => void = () => {
        if  (user) {
            //@ts-ignore
            dispatch(postOrderData({ ingredients: ingredientsAllId }));
            dispatch(modalOpen('orderDetails'));
            dispatch(deleteAllIngredients());
        } else {
            navigate('/login');
        }
    };

    const [{ isHover }, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(ingredient: Ingredient) {
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
      <BurgerCreating/>
            </div>
            <span className={styles.burger_sum}>
                <p className={`${styles.currency} text text_type_digits-medium mr-10`}>
                    {price}
                    <CurrencyIcon type="primary" />
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
                {isModalOpen && modalType === "orderDetails" && (
                    <Modal title={''} onClose={() => dispatch(modalClose())}>
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
};
export default BurgerConstructor;
