
import { useState, useEffect } from 'react';
import { data } from '../../utils/data';
import styles from './burger-bar.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/Ingredient-Details';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

function ShowIngredientDetails({ ingredient, onShowDetails }) {

    let count = 1;

    return (
        <section
            className={styles.ingredient_item}
            onClick={() => onShowDetails(ingredient)}>
            <img src={ingredient.image} alt={ingredient.name} />
            {count && (
                <Counter count={count} size="default" extraClass="m-1" />)}
            <span className={styles.ingredient_price}>
                <div className={`${styles.ingredient_price} text_type_digits-default `}>
                    {ingredient.price}
                    <CurrencyIcon type="primary" />
                </div>
            </span>
            <span className={`${styles.ingredient_name} text_type_main-default`}>
                {ingredient.name}
            </span>
        </section>
    );
}

function BurgerBar() {


    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const showIngredientDetails = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    const closeIngredientDetails = () => {
        setSelectedIngredient(null);
    };

    const [categorizedData, setCategorizedData] = useState({
        Buns: [],
        Sauce: [],
        Main: [],
    });

    useEffect(() => {

        const typeToCategory = {
            bun: 'Булки',
            sauce: 'Соусы',
            main: 'Начинки',
        };

        const categorizedIngredients = data.reduce((result, ingredient) => {
            const category = typeToCategory[ingredient.type];
            if (category) {
                result[category].push(ingredient);
            }
            return result;
        }, { Булки: [], Соусы: [], Начинки: [] });

        setCategorizedData(categorizedIngredients);
    }, []);


    return (
        <section className={`${styles.burger_bar} mt-10`}>
            {Object.keys(categorizedData).map((categoryName) => (
                <article key={categoryName}
                    className={styles.ingredient_article}>
                    <h2 className={`${styles.ingredient_title} text_type_main-medium pb-6`}>{categoryName}</h2>
                    <ul className={styles.burger_list}>
                        {categorizedData[categoryName].map((ingredient) => (
                            <li
                                className={`${styles.ingredient_item} pl-4`}
                                key={ingredient._id}>
                                <ShowIngredientDetails ingredient={ingredient} onShowDetails={showIngredientDetails} />
                            </li>
                        ))}
                    </ul>
                </article>
            ))}

            {selectedIngredient && (
                <Modal onClose={closeIngredientDetails} title="Детали ингредиента"
                    className={styles.title_details}>
                    <IngredientDetails ingredient={selectedIngredient} />
                </Modal>
            )}
        </section>
    );
}

ShowIngredientDetails.propTypes = {
    ingredient: ingredientPropType,
    onShowDetails: PropTypes.func.isRequired,
}


export default BurgerBar;
