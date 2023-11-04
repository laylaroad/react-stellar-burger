import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bun: null,
    mains: [],
    isLoading: false,
    isError: null,
};

const burgerConstructorSlice = createSlice({

    name: 'burgerConstructor',
    initialState,
    reducers: {

        addIngredient: (state, action) => {
            if (action.payload.type === 'bun') {
                state.bun = action.payload;
            } else {
                state.mains.push(action.payload);
            }
        },
        deleteIngredient: (state, action) => {
            console.log(action.payload);
            state.mains = state.mains.filter(
                (item) => item._customId !== action.payload._customId
            );
        },
        moveIngredient: (state, action) => {
            const { indexFrom, indexTo, ingredient } = action.payload;
            state.mains.splice(indexFrom, 1);
            state.mains.splice(indexTo, 0, ingredient);
        },
        deleteAllIngredients: (state) => {
            state.mains = [];
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
