
export const selectIngredients = (store) => store.ingredients.ingredientsArray;

export const selectIngredientsError = (store) => store.ingredients.isError;

export const selectIngredientsIsLoading = (store) => store.ingredients.isLoading;

export const selectCurrentIngredient = (store) => store.ingredients.currentIngredient;

