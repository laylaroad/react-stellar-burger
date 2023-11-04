
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
                        extraClass={styles.bun} />

                    <div className={styles.mains_wrapper}>
                        {mains.map((item, index) => {
                            return <IngredientsMain item={item} key={item._customId} index={index} />
                        })}
                    </div>

                    <ConstructorElement
                        type='bottom'
                        isLocked={true}
                        text={`${bun.name}(низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass={styles.bun} />
                </>)
                : (
                    <span className={`${styles.add_bun} text text_type_main-medium mt-4 mb-8`}>Добавьте булку</span>
                )}

        </div>
    )
}



export default BurgerCreating;
