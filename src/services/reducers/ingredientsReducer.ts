import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiUrl, checkResponse } from '../../utils/api';
import { Ingredient } from '../../types/ingredient-types';

interface IngredientsState {
  ingredientsArray: Ingredient[];
  currentIngredient: Ingredient | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IngredientsState = {
  ingredientsArray: [],
  currentIngredient: null,
  isLoading: false,
  isError: false,
};

export const getIngredientsData = createAsyncThunk(
  'ingredients/getIngredientsData',
  async () => {
    const response = await fetch(`${apiUrl}/ingredients`);
    const data = await checkResponse(response);
    return data;
  }
);

const ingredientsSliceData = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    showIngredient: (state, action: PayloadAction<Ingredient>) => {
      state.currentIngredient = action.payload;
    },
    closeIngredient: (state) => {
      state.currentIngredient = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredientsData.pending, (state) => {
      // console.log('Fetching ingredients data...');
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getIngredientsData.fulfilled, (state, action) => {
      // console.log('Ingredients data fetched successfully:', action.payload);
      state.ingredientsArray = action.payload.data;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getIngredientsData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { showIngredient, closeIngredient } = ingredientsSliceData.actions;

export default ingredientsSliceData.reducer;
