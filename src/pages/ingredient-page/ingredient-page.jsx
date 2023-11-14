import styles from './ingredient-page.module.css';
import { selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

function IngredientPage() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredientsData());
    }, [dispatch]);

    const { id } = useParams();
    console.log("Ingredient ID:", id);
    const ingredients = useSelector(selectIngredients);
    console.log("Ingredients:", ingredients);
    const ingredientsData = ingredients.find((ingredient) => ingredient._id === id);

    return (
        <div className={styles.ingredient_section}>
            <IngredientDetails center={true} ingredientsData={ingredientsData} />
        </div>
    );
}

export default IngredientPage;







