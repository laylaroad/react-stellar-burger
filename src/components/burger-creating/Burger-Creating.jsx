
import styles from './burger-creating.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectBurgerBun, selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';
import { useSelector } from 'react-redux';
import IngredientsMain from '../ingredients-main/IngredientsMain';


function BurgerCreating() {

    const bun = useSelector(selectBurgerBun);
    const mains = useSelector(selectBurgerIngredients);

    return (
        <div className={styles.burger_wrapper}>
            {bun ? (
                <>
                    <ConstructorElement
                        type='top'
                        isLocked={true}
                        text={`${bun.name}(верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass={`${styles.bun} mr-4`} />

                    <div>
                        {mains.map((item, index) => {
                            return <IngredientsMain item={item} index={index} />
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
                    <span>Добавьте булку</span>
                )}

        </div>
    )
}



export default BurgerCreating;
