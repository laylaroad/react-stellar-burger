// import { HTML } from 'react-dnd-html5-backend/dist/types/NativeTypes';
import BurgerConstructor from '../burger-constructor/Burger-Constructor';
import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import styles from './section.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Section() {
    return (
        <main className={styles.section}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
}

export default Section;
