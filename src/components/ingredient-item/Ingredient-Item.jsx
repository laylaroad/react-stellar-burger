import React, { useState, useEffect } from "react";
import { ingredientPropType } from "../../utils/prop-types";
import { useSelector, useDispatch } from 'react-redux';
import styles from './ingredient-item.module.css';
import { selectBurgerIngredients } from "../../services/reducers/burgerConstructorReducer";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { catchIngredient } from '../../services/reducers/ingredientsReducer';

function IngredientItem() {

    const dispatch = useDispatch();
    const ingredients = useSelector((state) => state.selectBurgerIngredients.ingredients);

    useEffect(() => {
        dispatch(catchIngredient());
    }, []);

    return (
        ingredients.map((ingredient) => (
            <div className={styles.ingredient_item} key={ingredient._id}>
                <img src={ingredient.image} alt={ingredient.name}
                />
                <div className={styles.ingredient_price}>
                    <p className={`text text_type_digits-default`}>{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <h4 className="text text_type_main-default">
                    {ingredient.name}
                </h4>
                <Counter count={ingredient.count} size="default" extraClass="m-1" />
            </div>
        ))
    );
}

IngredientItem.propTypes = {
    ingredients: ingredientPropType,
};

export default IngredientItem;
