import styles from './ingredient-page.module.css';
import { FC } from 'react';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';


const IngredientPage: FC = () => {
  return (
    <>
      <div className={styles.ingredient_section}>
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <IngredientDetails />
      </div>
    </>
  );
};

export default IngredientPage;

