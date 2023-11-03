import React, { useState, createRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-ingredients.module.css';
import BurgerTab from '../burger-tab/Burger-Tab';
import IngredientItem from '../ingredient-item/Ingredient-Item';
import { selectIngredients } from '../../services/selectors/ingredientsSelector';

function BurgerIngredients() {

    const [current, setCurrent] = useState('one');
    const ingredients = useSelector(selectIngredients);
    const oneRef = createRef(null);
    const twoRef = createRef(null);
    const threeRef = createRef(null);

    const handleScroll = () => {
        const result = [
            {
                name: 'one',
                coords: oneRef.current.getBoundingClientRect().top,
            },
            {
                name: 'two',
                coords: twoRef.current.getBoundingClientRect().top,
            },
            {
                name: 'three',
                coords: threeRef.current.getBoundingClientRect().top,
            },

        ]
            .filter((elem) => elem.coords > 0)
            .sort((a, b) => a.coords - b.coords);

        if (result.length) {
            setCurrent(result[0].name);
        }
    };

    return (
        <section className={styles.burger_ingredients}>
            <h2 className={`${styles.burger_title} text text_type_main-large`}>Соберите бургер</h2>
            <BurgerTab current={current} />
            <article className={styles.container} onScroll={handleScroll}>
                {ingredients && (
                    <>
                        <h3 className={`${styles.ingredient_title} text text_type_main-medium pb-6`} ref={oneRef}>
                            Булки
                        </h3>
                        <div className={`${styles.ingredients} pl-4`}>
                            {ingredients.map((ingredient) => {
                                if (ingredient.type === 'bun') {
                                    return (
                                        <IngredientItem
                                            key={ingredient._id}
                                            ingredient={ingredient}
                                        />
                                    );
                                }
                            })}
                        </div>

                        <h3 className={`${styles.ingredient_title} text text_type_main-medium pb-6`} ref={twoRef}>
                            Соусы
                        </h3>

                        <div className={`${styles.ingredients} pl-4`}>
                            {ingredients.map((ingredient) => {
                                if (ingredient.type === 'sauce') {
                                    return (
                                        <IngredientItem
                                            key={ingredient._id}
                                            ingredient={ingredient}

                                        />
                                    );
                                }
                            })}
                        </div>

                        <h3 className={`${styles.ingredient_title} text text_type_main-medium pb-6`} ref={threeRef}>
                            Начинки
                        </h3>

                        <div className={`${styles.ingredients} pl-4`}>
                            {ingredients.map((ingredient) => {
                                if (ingredient.type === 'main') {
                                    return (
                                        <IngredientItem
                                            key={ingredient._id}
                                            ingredient={ingredient}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </>
                )}
            </article>
        </section>
    );
};

export default BurgerIngredients;
