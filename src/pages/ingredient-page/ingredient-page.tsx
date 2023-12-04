import styles from './ingredient-page.module.css';
import {  selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import  { FC} from 'react';
import { Ingredient } from '../../utils/ingredient-types';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';


const IngredientPage: FC = () => {
  return (
    <>
      <div className={styles.ingredient_section}>
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <IngredientDetails />
      </div>
      <h2 className="text text_type_main-large">Данные грузятся</h2>
    </>
  );
};

export default IngredientPage;

