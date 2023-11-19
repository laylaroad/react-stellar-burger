import styles from './ingredient-page.module.css';
import { selectIngredientById, selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import  { FC, useEffect, ReactElement } from 'react';
import { Ingredient } from '../../utils/ingredient-types';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

interface IngredientPageProps {
  ingredient: any
}

const IngredientPage: FC<IngredientPageProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  const { id } = useParams();
  console.log(id);

  const ingredientsArray = useSelector(selectIngredients);
  console.log(ingredientsArray);

  const ingredient = ingredientsArray.find((ingredient: any) => ingredient._id === id) as Ingredient;
  console.log(ingredient);

  return ingredient ? (
    <div className={styles.ingredient_section}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  ) : (
    <div>Данные грузятся</div>
  );
};

export default IngredientPage;

