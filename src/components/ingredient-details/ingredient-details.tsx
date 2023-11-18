
import styles from './ingredient-details.module.css';
import {FC } from 'react';

import { selectCurrentIngredient } from '../../services/selectors/ingredientsSelector';
import { useSelector } from 'react-redux';
import { Ingredient } from '../../utils/ingredient-types';


const IngredientDetails : FC = () => {{

    const ingredient = useSelector(selectCurrentIngredient) as Ingredient;

    const { image_large, name, calories, carbohydrates, fat, proteins } =
    ingredient;

    return (
        <section className={`${styles.ingredient_section}`}>
            <img
                src={image_large}
                alt={ingredient.name}
                className={`${styles.ingredient_image}`}
            />
            <h3 className={`${styles.ingredient_title} text_type_main-medium `}>{name}</h3>
            <ul className={styles.ingredient_ul}>
                <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
                    <p>Калории, ккал</p>
                    <span>{calories}</span>
                </li>
                <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
                    <p>Белки, г</p>
                    <span>{proteins}</span>
                </li>
                <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
                    <p>Жиры, г</p>
                    <span>{fat}</span>
                </li>
                <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
                    <p>Углеводы, г</p>
                    <span>{carbohydrates}</span>
                </li>
            </ul>
        </section>
    );
}
}

export default IngredientDetails;
