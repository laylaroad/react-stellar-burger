
// export const selectIngredients =
//     createSelector(
//         [(state) => state],
//         (state) => {
//             return state.ingredients.ingredientsArray;
//         }
//     );

export const selectIngredients = (store) => store.ingredients.ingredientsArray;

// export const selectIngredientsError = createSelector(
//     [(state) => state],
//     (state) => {
//         return state.ingredients.isError;
//     }
// );

export const selectIngredientsError = (store) => store.ingredients.isError;

// export const selectIngredientsIsLoading = createSelector(
//     [(state) => state],
//     (state) => {
//         return state.ingredients.isLoading;
//     }
// );

export const selectIngredientsIsLoading = (store) => store.ingredients.isLoading;

// export const selectCurrentIngredient = createSelector(
//     [(state) => state.ingredients],
//     (ingredients) => ingredients.currentIngredient
// )

export const selectCurrentIngredient = (store) => store.ingredients.currentIngredient

// export const selectIngredientsModal = createSelector(
//     [(state) => state.ingredients],
//     (ingredients) => ingredients.ingredientsModal
// )

export const selectIngredientsModal = (store) => store.ingredients.ingredientsModal;
