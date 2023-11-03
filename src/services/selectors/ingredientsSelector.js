import { createSelector } from '@reduxjs/toolkit';

export const selectIngredients =
    createSelector(
        [(state) => state],
        (state) => {
            return state.ingredients.ingredientsArray;
        }
    );

export const selectIngredientsError = createSelector(
    [(state) => state],
    (state) => {
        return state.ingredients.isError;
    }
);

export const selectIngredientsIsLoading = createSelector(
    [(state) => state],
    (state) => {
        return state.ingredients.isLoading;
    }
);

export const selectCurrentIngredient = createSelector(
    [(state) => state.ingredients],
    (ingredients) => ingredients.currentIngredient
)

export const selectIngredientsModal = createSelector(
    [(state) => state.ingredients],
    (ingredients) => ingredients.ingredientsModal
)
