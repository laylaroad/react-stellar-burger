import styles from './burger-constructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { addIngredient } from '../../services/reducers/burgerConstructorReducer';
import BurgerCreating from '../burger-creating/Burger-Creating';
import IngredientsMain from '../ingredients-main/IngredientsMain';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop(ingredient) {
            const newIngredient = { ...ingredient, _customId: uuidv4() };
            dispatch(addIngredient(newIngredient));
        },
    });


    return (
        <section className={styles.burger_constructor} ref={dropRef}>
            <IngredientsMain />

            <div className={styles.container_empty}>
            </div>
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
};

export default BurgerConstructor;
