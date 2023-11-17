import styles from './ingredient-page.module.css';
import {FC,} from 'react';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';

const IngredientPage: FC = () => {
    return (
      <div className={styles.ingredient_section}>
        <IngredientDetails />
      </div>
    );
  }
  
  export default IngredientPage;





