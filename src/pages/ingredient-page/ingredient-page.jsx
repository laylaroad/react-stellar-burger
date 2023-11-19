import styles from './ingredient-page.module.css';
import { selectIngredientById, selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

function IngredientPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsData());
  }, [getIngredientsData]);

  const { id } = useParams();
  console.log(id);

  const ingredientsArray = useSelector(selectIngredients);
  console.log(ingredientsArray);

  const ingredient = ingredientsArray.find((ingredient) => ingredient._id === id);
  console.log(ingredient);
  return ingredient ? (
    <div className={styles.ingredient_section}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  ) : (
    <div>Данные грузятся</div>
  );

}

export default IngredientPage;


