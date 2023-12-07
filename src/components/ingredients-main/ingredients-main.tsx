import styles from './ingredients-main.module.css';
import {FC} from 'react';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';

import { moveIngredient } from '../../services/reducers/burgerConstructorReducer';
import { deleteIngredient } from '../../services/reducers/burgerConstructorReducer';

import {Ingredient, IngredientId} from '../../types/ingredient-types';

interface IngredientMainProps {

    item: IngredientId
    index: number
}

const IngredientsMain: FC<IngredientMainProps> = ({ item, index }) => {

    const mains = useSelector(selectBurgerIngredients) as Array<IngredientId>;
    const dispatch = useDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'sort',
        item: { ingredient: item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    const findIndex = (item:IngredientId ) => {
        return mains.indexOf(item);
    }

    const handleDelete = () => {
        dispatch(deleteIngredient(item));
    }

    const [, dropRef] = useDrop({
        accept: 'sort',
        hover({ ingredient }:{ingredient: IngredientId}):void {
            if (ingredient._customId === item._customId)
                return;
            dispatch(
                moveIngredient({
                    indexFrom: findIndex(ingredient),
                    indexTo: index,
                    ingredient: ingredient,
                })
            );
        },
    });

    return (
        <div className={`${styles.main} ${isDragging ? styles.draggable : ''} `} ref={(node) => dropRef(dragRef(node))}>

            <DragIcon type="primary" />
            <ConstructorElement
                // key={index._id}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={handleDelete} />

        </div>
    );

}

export default IngredientsMain;
