import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import styles from './section.module.css';
import { DndProvider } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';
import BurgerConstructorItem from '../burger-constructor-item/Burger-Constructor-Item';
// import Burger from '../burger/Burger';

function Section() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientsData());
    }, []);
    return (
        <main className={styles.section}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                {/* <Burger /> */}
            </DndProvider>
        </main>
    )
};



export default Section;
