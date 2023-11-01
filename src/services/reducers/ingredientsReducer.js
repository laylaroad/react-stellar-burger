import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from '../../utils/api';

const initialState = {
    ingredients: [],
    currentIngredient: {},
}

export const getIngredientsData = createAsyncThunk(
    'ingredients/getIngredientsData',
    async () => {
        console.log('Request initiated');
        const response = await fetch(`${apiUrl}/ingredients`);
        if (!response.ok) {
            console.log(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Request succeeded with data:', data);
        return data.data;
    }
);


const ingredientsSliceData = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        catchIngredient: (state, action) => {
            state.currentIngredient = action.payload;
            console.log('Received data:', action.payload);

        },
        returnIngredient: (state) => {
            state.currentIngredient = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getIngredientsData.fulfilled, (state, action) => {
            state.ingredients = action.payload.data;
        });
        builder.addCase(getIngredientsData.rejected, (action) => {
            console.error(action.error);
        });
    }
});


export const { catchIngredient, returnIngredient } =
    ingredientsSliceData.actions;

export default ingredientsSliceData.reducer;


export const selectIngredients = createSelector(
    [(state) => state],
    (state) => {
        console.log('Selected ingredients:', state.ingredients);
        return state.ingredients.ingredients;
    }
);

export const selectCurrentIngredient = createSelector(
    [(state) => state.ingredients],
    (ingredients) => ingredients.currentIngredient
)
