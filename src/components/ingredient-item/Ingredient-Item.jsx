import { useEffect } from "react";
import { ingredientPropType } from "../../utils/prop-types";
import { useDispatch } from 'react-redux';
import styles from './ingredient-item.module.css';
import { useDrag } from 'react-dnd';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { showIngredient } from '../../services/reducers/ingredientsReducer';
import { modalOpen } from '../../services/reducers/modalReducer';

function IngredientItem({ ingredient }) {

    const dispatch = useDispatch();

    const modalIngredients = () => {
        dispatch(modalOpen('ingredientDetails'))
        dispatch(showIngredient());
    };

    // useEffect(() => {
    //     dispatch(showIngredient(ingredient));
    // }, []);

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient,
    });

    return (
        <div className={styles.ingredient_item} onClick={modalIngredients} key={ingredient._id} ref={dragRef}>
            <img src={ingredient.image} alt={ingredient.name}
            />
            <div className={styles.ingredient_price}>
                <p className={`${styles.ingredient_name} text text_type_digits-default`}>{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-default">
                {ingredient.name}
            </h4>
            <Counter count={ingredient.count} size="default" extraClass="m-1" />
        </div>
    );
}

IngredientItem.propTypes = {
    ingredients: ingredientPropType,
};

export default IngredientItem;
