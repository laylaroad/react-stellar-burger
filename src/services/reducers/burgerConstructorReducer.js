import { createSlice } from '@reduxjs/toolkit';
import { getIngredientsData } from './ingredientsReducer';

const initialState = {
    bun: null,
    ingredients: [],
    isLoading: false,
    isError: null,
};



const burgerConstructorSlice = createSlice({

    name: 'burgerConstructor',
    initialState,
    reducers: {

        addIngredient: (state, action) => {
            if (action.payload.type !== 'bun') {
                state.ingredients.push(action.payload);
            } else {
                state.bun = action.payload;
            }
        },
        deleteIngredient: (state, action) => {
            state.ingredients = state.ingredients.filter(
                (item) => item._customId !== action.payload._customId
            );
        },
        moveIngredient: (state, action) => {
            const { indexFrom, indexTo, ingredient } = action.payload;
            state.ingredients.splice(indexFrom, 1);
            state.ingredients.splice(indexTo, 0, ingredient);
        },
        deleteAllIngredients: (state) => {
            state.ingredients = [];
            state.bun = null;
        },
    },
});

export const {
    addIngredient,
    deleteIngredient,
    moveIngredient,
    deleteAllIngredients,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;





// setIngredients: (state, action) => {
//     console.log('Received data:', action.payload);

//     state.ingredients = action.payload;
//     state.isLoading = false;
//     state.isError = null;
// },
// setIngredientsLoading: (state) => {
//     state.isLoading = true;
//     state.isError = null;
// },
// setIngredientsError: (state, action) => {
//     state.isLoading = false;
//     state.isError = action.payload;
// },
