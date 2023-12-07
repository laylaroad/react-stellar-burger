import { RootStore } from '../store';
export const selectIngredients = (store: RootStore) => store.ingredients.ingredientsArray; //здесь ничего не лежит, когда обращаюсь к стору в ingredient-page

export const selectIngredientsError = (store: RootStore) => store.ingredients.isError;

export const selectIngredientsIsLoading = (store: RootStore) => store.ingredients.isLoading;

export const selectCurrentIngredient = (store: RootStore) => store.ingredients.currentIngredient;

export const selectIngredientById = (id: string) => (store: RootStore) => {
    const ingredientsArray = store.ingredients.ingredientsArray || [];
    return ingredientsArray.find((ingredient) => ingredient._id === id);
};

