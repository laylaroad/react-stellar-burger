import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
    bun: {},
    ingredients: [],
    isLoading: false,
    isError: null,
};

const burgerConstructorSlice = createSlice({

    name: 'burgerConstructor',
    initialState,
    reducers: {
        setIngredients: (state, action) => {
            console.log('Received data:', action.payload);

            state.ingredients = action.payload;
            state.isLoading = false;
            state.isError = null;
        },
        setIngredientsLoading: (state) => {
            state.isLoading = true;
            state.isError = null;
        },
        setIngredientsError: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
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
            state.bun = {};
        },
    },
});

export const {
    addIngredient,
    deleteIngredient,
    moveIngredient,
    deleteAllIngredients,
    setIngredients,
    setIngredientsLoading,
    setIngredientsError,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;

export const selectBurgerIngredients = createSelector(
    [(state) => state.burgerConstructor],
    (burgerConstructor) => ({
        ingredients: [...burgerConstructor.ingredients, burgerConstructor.bun].map(
            (item) => item._id
        ),
    })
);

export const selectBurgerBun = createSelector(
    (state) => state.burgerConstructor,
    (burgerConstructor) => burgerConstructor.bun
);
