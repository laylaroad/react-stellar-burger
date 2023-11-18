import styles from './ingredient-page.module.css';
import {FC, ReactNode, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import {selectIngredientById} from '../../services/selectors/ingredientsSelector';
import {Ingredient} from '../../utils/ingredient-types';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import NotFound404 from '../not-found-404/not-found-404';


const IngredientPage: FC = () => {
  const { id } = useParams<{ id: string }>();

   const ingredient = useSelector(selectIngredientById(id)) as Array<Ingredient>;

    console.log('Ingredient in ConnectedIngredientPage:', ingredient);


  return ingredient? (
    
    <div className={styles.ingredient_section}>
      <IngredientDetails {...ingredient}/>
    </div>
) : (
  <NotFound404 />
);
}

export default IngredientPage;




