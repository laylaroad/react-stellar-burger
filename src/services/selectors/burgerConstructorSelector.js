import { createSelector } from '@reduxjs/toolkit';

export const selectBurgerIngredients = state => state.burgerConstructor.ingredients;

export const selectBurgerBun = state => state.burgerConstructor.bun;
