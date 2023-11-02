// import { HTML } from 'react-dnd-html5-backend/dist/types/NativeTypes';
// import BurgerConstructor from '../burger-constructor/Burger-Constructor';
import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import styles from './section.module.css';
import { DndProvider } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { selectIngredientsError, selectIngredientsIsLoading } from '../../services/reducers/ingredientsReducer';
// import Burger from '../burger/Burger';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

// import BurgerConstructorItem from '../burger-constructor-item/Burger-Constructor-Item';

function Section() {

    const dispatch = useDispatch();

    // const ingredientsIsLoading = useSelector(selectIngredientsIsLoading);
    // const ingredientsIsError = useSelector(selectIngredientsError);

    useEffect(() => {
        dispatch(getIngredientsData());
    }, []);

    // if (ingredientsIsError) {
    //     return <span className={`${styles.loading_text} text_type_main-default`}>Ошибка</span>;
    // } else if (ingredientsIsLoading) {
    //     return <span className={`${styles.loading_text} text_type_main-default`}>Подождите, пожалуйста</span>;
    // } else {
    return (
        <main className={styles.section}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                {/* <Burger /> */}
                {/* <BurgerConstructor /> */}
            </DndProvider>
        </main>
    )
};



export default Section;
