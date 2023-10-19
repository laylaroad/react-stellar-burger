
import React from 'react';
import styles from './ingredient-details.module.css';

function IngredientDetails({ ingredient }) {
    return (
        <section className={`${styles.ingredient_section}`}>
            <img
                src={ingredient.image_large}
                alt={ingredient.name}
                className={`${styles.ingredient_image} mb-4`}
            />
            <h3 className={`${styles.ingredient_title} text_type_main-medium `}>{ingredient.name}</h3>
            <ul className={styles.ingredient_ul}>
                <li className={styles.ingredient_li}>
                    <p className="text_type_main-default text_color_inactive">Калории, ккал:</p>
                    <span className="text_type_main-default text_color_inactive">{ingredient.calories}</span>
                </li>
                <li className={styles.ingredient_li}>
                    <p className="text_type_main-default text_color_inactive">Белки, г:</p>
                    <span className="text_type_main-default text_color_inactive" >{ingredient.proteins}</span>
                </li>
                <li className={styles.ingredient_li}>
                    <p className="text_type_main-default text_color_inactive">Жиры, г:</p>
                    <span className="text_type_main-default text_color_inactive">{ingredient.fat}</span>
                </li>
                <li className={styles.ingredient_li}>
                    <p className="text_type_main-default text_color_inactive">Углеводы, г:</p>
                    <span className="text_type_main-default text_color_inactive">{ingredient.carbohydrates}</span>
                </li>
            </ul>
        </section>
    );
}

export default IngredientDetails;
