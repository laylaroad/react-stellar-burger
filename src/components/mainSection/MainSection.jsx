
import styles from './main-section.module.css';

import { DndProvider } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import BurgerConstructor from '../burger-constructor/Burger-Constructor';

import { selectIngredientsIsLoading, selectIngredientsError } from '../../services/selectors/ingredientsSelector';

function MainSection() {

    const dispatch = useDispatch();

    const isLoading = useSelector(selectIngredientsIsLoading);
    const isError = useSelector(selectIngredientsError);

    useEffect(() => {
        dispatch(getIngredientsData());
    }, []);

    return (
        <main className={styles.section}>
            <DndProvider backend={HTML5Backend}>
                {isLoading ? (
                    <span className={styles.loading_text}>Идет загрузка...</span>)
                    : isError ? (
                        <span className={styles.loading_text}>Произошла ошибка</span>)
                        : (
                            <> <BurgerIngredients />
                                <BurgerConstructor />
                            </>
                        )}
            </DndProvider>
        </main>
    )
};

export default MainSection;
