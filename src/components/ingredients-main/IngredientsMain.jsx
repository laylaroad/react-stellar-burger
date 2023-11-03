
import { selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';
import styles from './ingredients-main.module.css';
import { moveIngredient } from '../../services/reducers/burgerConstructorReducer';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { deleteIngredient } from '../../services/reducers/burgerConstructorReducer';

function IngredientsMain({ item, index }) {

    const mains = useSelector(selectBurgerIngredients);
    const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: 'sort',
        item: { ingredient: item },
    });

    const findIndex = (item) => {
        return mains.indexOf(item);
    }

    const deleteItem = () => {
        dispatch(deleteIngredient(item));
    }

    const [, dropRef] = useDrop({
        accept: 'sort',
        hover({ ingredient }) {
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
        <div className={styles.main} ref={(node) => dropRef(dragRef(node))}>

            <DragIcon />
            <ConstructorElement
                key={index}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                hadleClose={deleteItem} />

        </div>
    );


}

export default IngredientsMain;
