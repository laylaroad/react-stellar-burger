import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-ingredients.module.css';
import BurgerTab from '../burger-tab/Burger-Tab';
import IngredientItem from '../ingredient-item/Ingredient-Item';
import { getIngredientsData, selectIngredients } from '../../services/reducers/ingredientsReducer';

function BurgerIngredients() {
    const [current, setCurrent] = useState('one');
    const dispatch = useDispatch();
    const tabsRefs = {
        buns: useRef(),
        sauces: useRef(),
        mains: useRef(),
    };

    useEffect(() => {
        console.log('API request initiated');
        dispatch(getIngredientsData())
            .then((resultAction) => {
                console.log('API request successful', resultAction);

            })
            .catch((errorAction) => {
                console.error('API request failed', errorAction);
            });
    }, []);

    const ingredients = useSelector(selectIngredients);
    console.log(ingredients);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const result = Object.entries(tabsRefs)
            .map(([name, ref]) => ({
                name,
                coords: ref.current.getBoundingClientRect().top,
            }))
            .filter((el) => el.coords > 0)
            .sort((a, b) => a.coords - b.coords);

        if (result.length) {
            setCurrent(result[0].name);
        }
    };

    const renderIngredientsByType = (type) => (
        ingredients.map((ingredient) => {
            if (ingredient.type === type) {
                return (
                    <IngredientItem
                        key={ingredient._id}
                        ingredient={ingredient}
                    />
                );
            }
            return null;
        })
    );
    return (
        <section className={styles.burger_ingredients}>
            <h2 className={`${styles.burger_title} text text_type_main-large`}>Соберите бургер</h2>
            <BurgerTab current={current} />
            <article className={styles.burger_container} onClick={handleScroll}>
                {ingredients && (
                    <>
                        <h3 className="text text_type_main-medium pb-6" ref={tabsRefs.buns}>
                            Булки
                        </h3>
                        <div className={`${styles.ingredients} pl-4`}>
                            {renderIngredientsByType("bun")}
                        </div>

                        <h3 className="text text_type_main-medium pb-6" ref={tabsRefs.sauces}>
                            Соусы
                        </h3>
                        <div className={`${styles.ingredients} pl-4`}>
                            {renderIngredientsByType("sauces")}
                        </div>

                        <h3 className="text text_type_main-medium pb-6" ref={tabsRefs.mains}>
                            Начинки
                        </h3>
                        <div className={`${styles.ingredients} pl-4`}>
                            {renderIngredientsByType("mains")}
                        </div>
                    </>
                )}
            </article>
        </section>
    );
}

export default BurgerIngredients;
