
import styles from './burger-ingredients.module.css';
import BurgerTab from '../burger-tab/Burger-Tab';
import BurgerBar from '../burger-bar/Burger-Bar';
import { data } from '../../utils/data';


function BurgerIngredients() {

    return (
        <section className={styles.burger_ingredients}>
            <h2 className={`${styles.burger_title} text_type_main-large`}>Соберите бургер</h2>
            <BurgerTab />
            <article className={styles.burger_container}>
                <BurgerBar ingredient={data} />
            </article>
        </section>
    );
}

export default BurgerIngredients;
