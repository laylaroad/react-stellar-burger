import styles from './home-page.module.css';
import { FC } from 'react';

import { DndProvider } from 'react-dnd';
import { useAppSelector } from '../../hooks/react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';

import { selectIngredientsIsLoading, selectIngredientsError } from '../../services/selectors/ingredientsSelector';

const Home: FC = () => {

    const isLoading = useAppSelector(selectIngredientsIsLoading);
    const isError = useAppSelector(selectIngredientsError);

    return (
        <>
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
        </>
    )
};

export default Home;
