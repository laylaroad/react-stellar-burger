
import { useDrag, useDrop } from "react-dnd";
import { useEffect } from 'react'
import styles from './burger-constructor-item.module.css';
import { useDispatch, useSelector } from "react-redux";
import { moveIngredient, deleteIngredient } from '../../services/reducers/burgerConstructorReducer';
import { selectBurgerIngredients } from '../../services/selectors/burgerConstructorSelector';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { getIngredientsData } from '../../services/reducers/ingredientsReducer';
// import { data } from "../../utils/data";

function BurgerConstructorItem({ ingredient, index }) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('API request initiated');
    //     dispatch(getIngredientsData())
    //         .then((resultAction) => {
    //             console.log('API request successful', resultAction);

    //         })
    //         .catch((errorAction) => {
    //             console.error('API request failed', errorAction);
    //         });
    // }, []);

    const ingredients = useSelector(selectBurgerIngredients);


    const findIndex = (ingredient) => {
        return ingredients.indexOf(ingredient);
    };

    const [{ isDragging }, dragRef] = useDrag({
        type: "sort",
        item: { item: ingredient },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: "sort",
        hover({ item }) {
            if (item._customId === ingredient._customId)
                return;
            dispatch(
                moveIngredient({
                    indexFrom: findIndex(item),
                    indexTo: index,
                    ingredient: item,
                })
            );
        },
    });

    return (
        <li className={`${styles.drag_n_drop_constructor} ${isDragging ? styles.dragging : ''}`}
            ref={(node) => dropRef(dragRef(node))}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => dispatch(deleteIngredient(ingredient))}
            />
        </li>
    );
}

export default BurgerConstructorItem;

