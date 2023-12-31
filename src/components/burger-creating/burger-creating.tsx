import styles from './burger-creating.module.css';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/react-redux';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectBurgerBun, selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';
import IngredientsMain from '../ingredients-main/ingredients-main';



const BurgerCreating: FC = () => {

    const bun = useAppSelector(selectBurgerBun);
    const mains = useAppSelector(selectBurgerIngredients);

    return (
        <div className={`${styles.burger_wrapper} ${bun === null ? styles.burger_empty : ""}`}>
            {bun ? (
                <>
                    <ConstructorElement
                        type='top'
                        isLocked={true}
                        text={`${bun.name}(верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass={`${styles.bun} mr-8`} />

                    <div className={styles.mains_wrapper}>
                        {mains.map((item, index) => {
                            return <IngredientsMain item={item} key={item._customId} index={index} />;
                        })}
                    </div>

                    <ConstructorElement
                        type='bottom'
                        isLocked={true}
                        text={`${bun.name}(низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass={`${styles.bun} mr-4`} />
                </>)
                : (
                    <span className={`${styles.add_ingredient_span} text text_type_main-medium mt-4 mb-8`}>Начните составлять бургер</span>
                )}

        </div>
    )
}



export default BurgerCreating;
