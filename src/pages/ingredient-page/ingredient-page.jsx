import styles from './ingredient-page.module.css';
import { selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

function IngredientPage() {
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

  const ingredient = ingredients.find((ingredient) => ingredient._id.toString() === id);

  if (!ingredient) {
    console.log("Не найден ингредиент со следующим id:", id);
  } else {
    console.log("Ингредиент с id:", ingredient);
  }

  return (
    <div className={styles.ingredient_section}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  );

}

export default IngredientPage;


