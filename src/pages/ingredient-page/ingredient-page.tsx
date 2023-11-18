import styles from './ingredient-page.module.css';
import { selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FC, useEffect } from 'react';

import { Ingredient } from '../../utils/ingredient-types';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';


const IngredientPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsData());
  }, []);

  const { id } = useParams();
  console.log("id предполагаемого ингредиента", id);

  const ingredients = useSelector(selectIngredients);
  console.log("Ингредиенты:", ingredients);

  if (ingredients.length === 0) {
    console.log("Не обнаружено ни одного ингредиента");
  } else {
    console.log("Обнаружены следующие ингредиенты:", ingredients);

  }

  const ingredient = ingredients.find((ingredient: Ingredient) => ingredient._id.toString() === id);

  if (!ingredient) {
    console.log("Не найден ингредиент со следующим id:", id);
  } else {
    console.log("Ингредиент с id:", ingredient);
  }

  return (
    <section className={`${styles.ingredient_section}`}>
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className={`${styles.ingredient_image}`}
      />
      <h3 className={`${styles.ingredient_title} text_type_main-medium `}>{ingredient.name}</h3>
      <ul className={styles.ingredient_ul}>
        <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
          <p>Калории, ккал</p>
          <span>{ingredient.calories}</span>
        </li>
        <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
          <p>Белки, г</p>
          <span>{ingredient.proteins}</span>
        </li>
        <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
          <p>Жиры, г</p>
          <span>{ingredient.fat}</span>
        </li>
        <li className={`${styles.ingredient_li} text_type_main-default text_color_inactive`}>
          <p>Углеводы, г</p>
          <span>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </section>
  )
}

export default IngredientPage;


