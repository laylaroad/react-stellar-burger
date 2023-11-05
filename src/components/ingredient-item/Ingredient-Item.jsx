import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './ingredient-item.module.css';
import { useDrag } from 'react-dnd';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { showIngredient } from '../../services/reducers/ingredientsReducer';
import { modalOpen, modalClose } from '../../services/reducers/modalReducer';
import { SelectModalType } from '../../services/selectors/modalSelector';
import { selectBurgerBun, selectAllId } from '../../services/selectors/burgerConstructorSelector';
import IngredientDetails from '../ingredient-details/Ingredient-Details';
import Modal from '../modal/Modal';

function IngredientItem({ ingredient, _id }) {
    const dispatch = useDispatch();

    const modalType = useSelector(SelectModalType);

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

    const [{ isDragging }, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    return (
        <>
            <div className={`${styles.ingredient_item} ${isDragging ? styles.draggable : ''}`}
                onClick={modalIngredients}
                key={ingredient._id}
                ref={dragRef}>
                <img src={ingredient.image} alt={ingredient.name}
                />
                <div className={styles.ingredient_price}>
                    <span className={`${styles.ingredient_name} text text_type_digits-default`}>{ingredient.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h4 className={`${styles.ingredient_name} text text_type_main-default`}>
                    {ingredient.name}
                </h4>
                {count && <Counter count={count} size="default" extraClass="m-1" />}
            </div>

            {modalType === 'ingredientDetails' && (
                <Modal onClose={() => dispatch(modalClose())}>
                    <IngredientDetails />
                </Modal>)}
        </>
    );
}

IngredientItem.propTypes = {
    ingredient: PropTypes.array,
    id: ingredientPropType,
};

export default IngredientItem;
