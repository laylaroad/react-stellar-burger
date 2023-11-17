
export const selectIngredients = (store: any) => store.ingredients.ingredientsArray;

export const selectIngredientsError = (store: any) => store.ingredients.isError;

export const selectIngredientsIsLoading = (store: any) => store.ingredients.isLoading;

export const selectCurrentIngredient = (store: any) => store.ingredients.currentIngredient;

