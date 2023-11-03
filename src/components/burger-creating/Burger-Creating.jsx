
import styles from './burger-creating.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectBurgerBun, selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';
import { useSelector } from 'react-redux';
import IngredientsMain from '../ingredients-main/IngredientsMain';


function BurgerCreating() {

    const bun = useSelector(selectBurgerBun);
    const burgerIngredients = useSelector(selectBurgerIngredients);

    return (
        <div className={styles.burger_wrapper}>

            <ConstructorElement
                type='top'
                isLocked={true}
                text={`${bun.name}(верх)`}
                price={bun.price}
                thumbnail={bun.image}
                extraClass={`${styles.bun} mr-4`} />

            <div>
                {burgerIngredients.map((index, ingredient) => {
                    return <IngredientsMain index={index} ingredient={ingredient} />
                })}
            </div>

            <ConstructorElement
                type='bottom'
                isLocked={true}
                text={`${bun.name}(низ)`}
                price={bun.price}
                thumbnail={bun.image}
                extraClass={`${styles.bun} mr-4`} />

        </div>
    )
}



export default BurgerCreating;
