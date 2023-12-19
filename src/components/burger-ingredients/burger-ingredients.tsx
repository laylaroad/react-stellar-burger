import { FC, useState, useRef } from 'react';
import styles from './burger-ingredients.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { Ingredient } from '../../types/ingredient-types';

import BurgerTab from '../burger-tab/burger-tab';
import IngredientItem from '../ingredient-item/ingredient-item';

import { modalClose } from '../../services/reducers/modalReducer';
import Modal from '../modal/modal';
import { SelectModalType } from '../../services/selectors/modalSelector';

import { selectIngredients } from '../../services/selectors/ingredientsSelector';
import { selectIngredientsIsLoading, selectIngredientsError } from '../../services/selectors/ingredientsSelector';
import IngredientDetails from '../ingredient-details/ingredient-details';



const BurgerIngredients: FC = () => {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState('one');
  const ingredients = useAppSelector(selectIngredients);
  const modalType = useAppSelector(SelectModalType);
  const ingredientDetailsIsLoading = useAppSelector(selectIngredientsIsLoading);
  const ingredientDetailsIsError = useAppSelector(selectIngredientsError);

  const oneRef = useRef<HTMLHeadingElement>(null);
  const twoRef = useRef<HTMLHeadingElement>(null);
  const threeRef = useRef<HTMLHeadingElement>(null);

  interface IResult {
    name: string;
    coords: number | undefined;
  }

  const handleScroll = () => {
    const result: IResult[] = [
      {
        name: 'one',
        coords: oneRef.current?.getBoundingClientRect().top,
      },
      {
        name: 'two',
        coords: twoRef.current?.getBoundingClientRect().top,
      },
      {
        name: 'three',
        coords: threeRef.current?.getBoundingClientRect().top,
      },
    ]
      .filter((elem) => elem.coords && elem.coords > 0)
      .sort((a, b) => Number(a.coords) - Number(b.coords));

    if (result.length) {
      setCurrent(result[0].name);
    }
  };

  return (
    <>
      <section className={styles.burger_ingredients}>
        <h2 className={`${styles.burger_title} text text_type_main-large`}>Соберите бургер</h2>
        <BurgerTab current={current} setCurrent={setCurrent} />
        <div className={styles.container} onScroll={handleScroll}>
          {ingredients && ingredients.length > 0 ? (
            <>
              <h3 className={`${styles.ingredient_title} text text_type_main-medium pb-6`} ref={oneRef}>
                Булки
              </h3>
              <div className={`${styles.ingredients} pl-4`}>
                {ingredients.map((ingredient) => {
                  if (ingredient.type === 'bun') {
                    return <IngredientItem key={ingredient._id} _id={ingredient._id} ingredient={ingredient} />;
                  }
                })}
              </div>

              <h3 className={`${styles.ingredient_title} text text_type_main-medium pb-6`} ref={twoRef}>
                Соусы
              </h3>

              <div className={`${styles.ingredients} pl-4`}>
                {ingredients.map((ingredient) => {
                  if (ingredient.type === 'sauce') {
                    return <IngredientItem key={ingredient._id} _id={ingredient._id} ingredient={ingredient} />;
                  }
                })}
              </div>

              <h3 className={`${styles.ingredient_title} text text_type_main-medium pb-6`} ref={threeRef}>
                Начинки
              </h3>

              <div className={`${styles.ingredients} pl-4`}>
                {ingredients.map((ingredient) => {
                  if (ingredient.type === 'main') {
                    return <IngredientItem key={ingredient._id} _id={ingredient._id} ingredient={ingredient} />;
                  }
                })}
              </div>
            </>
          ) : (
            <p>No ingredients available.</p>
          )}
        </div>
      </section>

      {modalType === 'ingredientDetails' && (
        <Modal title={'Детали ингредиента'} onClose={() => dispatch(modalClose())}>
          {ingredientDetailsIsLoading ? (
            <span className="text text_type_main-medium mt-8 mb-8">Загрузка...</span>
          ) : ingredientDetailsIsError ? (
            <span className="text text_type_main-medium mt-8 mb-8">Ошибка</span>
          ) : (
            <IngredientDetails />
          )}
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
