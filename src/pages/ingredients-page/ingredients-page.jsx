import styles from './ingredients-page.module.css';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';

function IngredientPage() {

    return (

        <section className={styles.ingredient_section}>
            <h1 className={`${styles.ingredient_title} text text_type_main-large`}>
                Детали ингредиента
            </h1>
            <IngredientDetails />
        </section>
    );
}

export default IngredientPage;
