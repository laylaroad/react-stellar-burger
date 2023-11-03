import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, checkResponse } from '../../utils/api';

const initialState = {
    ingredients: [],
    currentIngredient: {},
    ingredientsModal: false,
    isLoading: false,
    isError: false,
}

export const getIngredientsData = createAsyncThunk(
    'ingredients/getIngredientsData', () => {
        return fetch(`${apiUrl}/ingredients`).then(checkResponse);
    }
);

const ingredientsSliceData = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        showIngredient: (state, action) => {
            state.currentIngredient = action.payload;
            console.log('Received data:', action.payload);
            state.ingredientsModal = true;
        },
        closeIngredient: (state) => {
            state.currentIngredient = {};
            state.ingredientsModal = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getIngredientsData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getIngredientsData.fulfilled, (state, action) => {
            state.ingredients = action.payload.data;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(getIngredientsData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});


export const { showIngredient, closeIngredient } =
    ingredientsSliceData.actions;

export default ingredientsSliceData.reducer;
