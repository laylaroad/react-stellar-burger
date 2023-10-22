import BurgerConstructor from '../burger-constructor/Burger-Constructor';
import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import styles from './section.module.css';

function Section() {
    return (
        <main className={styles.section}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default Section;
