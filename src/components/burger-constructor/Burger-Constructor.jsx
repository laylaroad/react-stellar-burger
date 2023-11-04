import styles from './burger-constructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { addIngredient } from '../../services/reducers/burgerConstructorReducer';
import { getOrderData } from '../../services/reducers/orderReducer';
import { modalOpen } from '../../services/reducers/modalReducer';
import { selectPrice, selectAllId, selectBurgerBun } from '../../services/selectors/burgerConstructorSelector';
import BurgerCreating from '../burger-creating/Burger-Creating';


function BurgerConstructor() {

    const dispatch = useDispatch();

    const price = useSelector(selectPrice);
    const ingredientsAllId = useSelector(selectAllId);
    const bun = useSelector(selectBurgerBun);

    const makeTheOrder = () => {
        dispatch(getOrderData({ ingredients: ingredientsAllId }));
        dispatch(modalOpen('orderDetails'));
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
        <section className={` ${styles.burger_constructor} ${isHover || '' === 0 ? styles.container_empty : ""
            } `}
            ref={dropTarget}>

            <div>

                <BurgerCreating />
            </div>
            <span className={styles.burger_sum}>
                <p className={`${styles.currency} text text_type_digits-medium mr-10`}>
                    {price}
                    <CurrencyIcon type="primary" extraClass={styles.currency} />
                </p>
                {bun ? (
                    <Button htmlType="button" type="primary" size="medium" onClick={makeTheOrder}>
                        Оформить заказ
                    </Button>)
                    : (
                        <Button htmlType="button" type="primary" size="medium" disabled>
                            Оформить заказ
                        </Button>
                    )}
            </span>

        </section >
    );
};

export default BurgerConstructor;
