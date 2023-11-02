import { createSelector } from "@reduxjs/toolkit";

export const selectBurgerIngredients = createSelector(
    (state) => state.burgerConstructor,
    (burgerConstructor) => burgerConstructor.ingredients
)

export const selectBurgerBun = createSelector(
    (state) => state.burgerConstructor,
    (burgerConstructor) => burgerConstructor.bun
);
