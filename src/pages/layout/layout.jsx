
import styles from './layout.module.css';

import { DndProvider } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { getIngredientsData } from '../../services/reducers/ingredientsReducer';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';

import { selectIngredientsIsLoading, selectIngredientsError } from '../../services/selectors/ingredientsSelector';

function Layout() {

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
                    <span className={`${styles.loading_text} text text_type_main-medium mt-8 mb-8`}>Идет загрузка...</span>)
                    : isError ? (
                        <span className={`${styles.loading_text} text text_type_main-medium mt-8 mb-8`}>Произошла ошибка</span>)
                        : (
                            <> <BurgerIngredients />
                                <BurgerConstructor />
                            </>
                        )}
            </DndProvider>
        </main>
    )
};

export default Layout;
