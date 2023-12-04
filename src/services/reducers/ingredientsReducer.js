import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, checkResponse } from '../../utils/api';

const initialState = {
    ingredientsArray: [],
    currentIngredient: {},
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
        },
        closeIngredient: (state) => {
            state.currentIngredient = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getIngredientsData.pending, (state) => {
            console.log('Fetching ingredients data...');
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getIngredientsData.fulfilled, (state, action) => {
            console.log('Ingredients data fetched successfully:', action.payload);
            state.ingredientsArray = action.payload.data;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(getIngredientsData.rejected, (state) => {
            console.error('Error fetching ingredients data:', state.error);
            state.isLoading = false;
            state.isError = true;
        });
    }
});


export const { showIngredient, closeIngredient } =
    ingredientsSliceData.actions;

export default ingredientsSliceData.reducer;
