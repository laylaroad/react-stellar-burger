
import React, { useState, useEffect } from 'react';
import { data } from '../../utils/data';
import styles from './burger-bar.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/Ingredient-Details';
import Modal from '../modal/Modal';

function ShowIngredientDetails({ ingredient, onShowDetails }) {
    return (
        <section
            className={styles.ingredient_item}
            onClick={() => onShowDetails(ingredient)}
        >
            <img src={ingredient.image} alt={ingredient.name} />
            <Counter count={1} size="default" extraClass="m-1" />
            <div className={styles.ingredient_price}>
                <div className={`${styles.ingredient_price} text_type_digits-default `}>
                    {ingredient.price}
                    <CurrencyIcon type="primary"
                        style={{ margin: '0', padding: '0' }} />
                </div>
            </div>
            <div className={`${styles.ingredient_name} text_type_main-default`}>
                {ingredient.name}
            </div>
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

        const categorizedIngredients = data.reduce((acc, ingredient) => {
            const category = typeToCategory[ingredient.type];
            if (category) {
                acc[category].push(ingredient);
            }
            return acc;
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
                            <span
                                className={`${styles.ingredient_item} pl-4`}
                                key={ingredient._id}>
                                <ShowIngredientDetails ingredient={ingredient} onShowDetails={showIngredientDetails} />
                            </span>
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

export default BurgerBar;



















// function IngredientItem({ ingredient }) {
//     return (
//         <div className={styles.ingredient_item}>
//             {Object.keys(ingredient).map((category) => (
//                 <div key={category}>
//                     <h3 className="text text_type_main-medium">{category}</h3>
//                     {Array.isArray(ingredient[category]) ? (
//                         ingredient[category].map((item) => (
//                             <div key={item._id}>
//                                 <img src={item.image} alt={item.name} />
//                                 <Counter count={1} size="default" extraClass="m-1" />
//                                 <h3 className="text text_type_main-medium">
//                                     {item.price} <CurrencyIcon type="primary" />
//                                 </h3>
//                                 <p className="text text_type_main-default">{item.name}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Category is not an array</p>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default IngredientItem;
