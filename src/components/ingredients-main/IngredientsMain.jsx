
import { selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';
import styles from './ingredients-main.module.css';
import Proptypes from 'prop-types';
import { moveIngredient } from '../../services/reducers/burgerConstructorReducer';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { deleteIngredient } from '../../services/reducers/burgerConstructorReducer';

function IngredientsMain({ item, index }) {

    const mains = useSelector(selectBurgerIngredients);
    const dispatch = useDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'sort',
        item: { ingredient: item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    const findIndex = (item) => {
        return mains.indexOf(item);
    }

    const handleDelete = () => {
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
        <div className={`${styles.main} ${isDragging ? styles.draggable : ''} `} ref={(node) => dropRef(dragRef(node))}>

            <DragIcon />
            <ConstructorElement
                key={index._id}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={handleDelete} />

        </div>
    );

}

export default IngredientsMain;

IngredientsMain.propTypes = {
    index: Proptypes.number,
    id: Proptypes.number,
}
