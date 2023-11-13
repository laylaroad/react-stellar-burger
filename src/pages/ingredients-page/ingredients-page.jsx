import styles from './ingredients-page.module.css';
import { selectIngredients } from '../../services/selectors/ingredientsSelector';

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';

function IngredientPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const ingredients = useSelector(selectIngredients);
    const ingredientsData = ingredients.find((ingredient) => ingredient._id === id);

    return (
        <div className="ingredient_section">
            <IngredientDetails center={true} ingredientsData={ingredientsData} />
            <button onClick={() => navigate("/")}>Close</button>
        </div>
    );
}

export default IngredientPage;







