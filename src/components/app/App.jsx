
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import AppHeader from "../app-header/App-Header";
import BurgerIngredients from "../burger-ingredients/Burger-Ingredients";
import { useDispatch } from 'react-redux';
// import { getIngredientsData } from '../../services/reducers/ingredientsReducer';
import MainSection from '../mainSection/MainSection';

import { deleteAllIngredients } from '../../services/reducers/burgerConstructorReducer';
import { modalClose } from '../../services/reducers/modalReducer';
import { SelectModalType, SelectModalOpen } from '../../services/selectors/modalSelector';

import OrderDetails from '../order-details/Order-Details';
import IngredientDetails from '../ingredient-details/Ingredient-Details';
import Modal from '../modal/Modal';




function App() {
    const dispatch = useDispatch();
    const modalType = useSelector(SelectModalType);
    // const isOpen = useSelector(SelectModalOpen);

    return (
        <div>
            <AppHeader />
            <MainSection />

            {modalType && (
                <Modal onClose={() => dispatch(modalClose())}>
                    <OrderDetails />
                </Modal>)}

        </div>

    );
}

export default App;







// import { useEffect, useState } from 'react';
// import { data } from "../../utils/data";
// import request from '../../utils/api';
// import AppHeader from "../app-header/App-Header";
// import BurgerIngredients from "../burger-ingredients/Burger-Ingredients";
// import BurgerConstructor from "../burger-constructor/Burger-Constructor";
// import Section from '../section/Section';


// function App() {

//     const [ingredientsData, setIngredientsData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     function getIngredientsData() {
//         setIsLoading(true);
//         request()
//             .then((data) => setIngredientsData(data))
//             .catch((err) => {
//                 setIsLoading(false);
//                 console.log(err);
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     }
//     useEffect(() => getIngredientsData(), []);

//     return (
//         <div>
//             <AppHeader />
//             {/* <Section> */}
//             {data.length && (
//                 <BurgerIngredients ingredients={ingredientsData.data} />)}
//             {data.length && (
//                 <BurgerConstructor ingredients={ingredientsData.data} />)}
//             {/* </Section> */}
//         </div>

//     );
// }

// export default App;
