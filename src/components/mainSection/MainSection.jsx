import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import styles from './main-section.module.css';
import { DndProvider } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getIngredientsData } from '../../services/reducers/ingredientsReducer';
import BurgerConstructor from '../burger-constructor/Burger-Constructor';
// import { selectIngredientsIsLoading } from '../../services/selectors/ingredientsSelector';

function MainSection() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientsData());
    }, []);

    // const isLoading = useSelector(selectIngredientsIsLoading);

    return (
        <main className={styles.section}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
};

export default MainSection;