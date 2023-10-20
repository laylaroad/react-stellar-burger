import { useEffect, useState } from 'react';
import { data } from "../../utils/data";
import AppHeader from "../app-header/App-Header";
import BurgerIngredients from "../burger-ingredients/Burger-Ingredients";
import BurgerConstructor from "../burger-constructor/Burger-Constructor";
import Section from '../section/Section';

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
function request() {
    return fetch(apiUrl).then(checkResponse);
}

function App() {

    const [IngredientsData, setIngredientsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function getIngredientsData() {
        setIsLoading(true);
        request()
            .then((data) => setIngredientsData(data))
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    useEffect(() => getIngredientsData(), []);

    return (
        <div>
            <AppHeader />
            <Section>
                {data.length && (
                    <BurgerIngredients ingredients={IngredientsData.data} />)}
                {data.length && (
                    <BurgerConstructor ingredients={IngredientsData.data} />)}
            </Section>
        </div>

    );
}

export default App;
