import { useMemo, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { DragPreviewImage, useDrag, DragSourceMonitor } from 'react-dnd';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-item.module.css';

import { showIngredient } from '../../services/reducers/ingredientsReducer';
import { modalOpen } from '../../services/reducers/modalReducer';

import { selectBurgerBun, selectAllId } from '../../services/selectors/burgerConstructorSelector';

import {Ingredient } from '../../utils/ingredient-types';

interface IngredientItemProps {
  ingredient: Ingredient;
  _id: string;
}

const IngredientItem: FC<IngredientItemProps> = ({ ingredient, _id }) => {
  const dispatch = useDispatch();

  const bun = useSelector(selectBurgerBun);
  const allIdIngredients = useSelector(selectAllId);
  const allIdArray = Array.isArray(allIdIngredients) ? allIdIngredients : [];

  const count = useMemo(() => {
    const idCount = allIdArray.filter((id) => id === _id).length;

    if (bun !== null) {
      return idCount + (bun._id === _id ? 1 : 0);
    } else {
      return idCount;
    }
  }, [allIdArray, _id, bun]);

  const modalIngredients = () => {
    dispatch(showIngredient(ingredient));
    dispatch(modalOpen('ingredientDetails'));
  };

  const [{ isDragging }, dragRef, preview] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`${styles.ingredient_item} ${isDragging ? styles.draggable : ''}`}
      onClick={modalIngredients}
      key={ingredient._id}
      ref={dragRef}
    >
      <DragPreviewImage connect={preview} src={ingredient.image} />
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={styles.ingredient_price}>
        <span className={`${styles.ingredient_name} text text_type_digits-default`}>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h4 className={`${styles.ingredient_name} text text_type_main-default`}>{ingredient.name}</h4>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
    </div>
  );
};



export default IngredientItem;
