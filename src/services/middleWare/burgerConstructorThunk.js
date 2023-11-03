import { fetchIngredients } from '../../utils/api';
import {
    setIngredients,
    setIngredientsLoading,
    setIngredientsError,
} from '../reducers/burgerConstructorReducer';

export const getIngredientsData = () => async (dispatch) => {
    dispatch(setIngredientsLoading());
    try {
        const data = await fetchIngredients();
        dispatch(setIngredients(data));
    } catch (error) {
        dispatch(setIngredientsError('Произошла ошибка при загрузке ингредиентов'));
    }
};







