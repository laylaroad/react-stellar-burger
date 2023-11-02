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


import { useEffect, useState } from 'react';
import AppHeader from "../app-header/App-Header";
import BurgerIngredients from "../burger-ingredients/Burger-Ingredients";

import Section from '../section/Section';


function App() {

    return (
        <div>
            <AppHeader />
            <Section>

                <BurgerIngredients />
            </Section>
        </div>

    );
}

export default App;
